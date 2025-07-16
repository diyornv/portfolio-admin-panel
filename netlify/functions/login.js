const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body);
    // API manzilingizni shu yerga yozing
    const response = await axios.post('http://13.203.104.23:3000/auth/login', body);

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
      headers: { 'Access-Control-Allow-Origin': '*' }
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ message: error.message, ...error.response?.data }),
      headers: { 'Access-Control-Allow-Origin': '*' }
    };
  }
}; 