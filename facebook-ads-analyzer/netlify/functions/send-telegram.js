const fetch = require('node-fetch');
exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    console.error('Method Not Allowed:', event.httpMethod);
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed', receivedMethod: event.httpMethod })
    };
  }
  try {
    if (!event.body) {
      console.error('Request body is empty.');
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Request body is empty.' })
      };
    }
    const { botToken, chatId, message } = JSON.parse(event.body);
    if (!botToken || !chatId || !message) {
      console.error('Missing required fields:', { botToken: !!botToken, chatId: !!chatId, message: !!message });
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields (botToken, chatId, message).' })
      };
    }
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const tgBody = {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown'
    };
    console.log('Telegram request:', telegramUrl, tgBody);

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tgBody)
    });

    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      console.error('Telegram API response bukan JSON:', text);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: 'Invalid JSON from Telegram API', raw: text })
      };
    }
    if (!response.ok) {
      console.error('Telegram API Error:', result);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: 'Telegram API returned an error', details: result })
      };
    }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.error('Error in Netlify Function:', error.message, error.stack);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error in Netlify Function.', details: error.message })
    };
  }
};
