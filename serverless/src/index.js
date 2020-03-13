const { publish } = require('./snsManager.js');

module.exports.sendNotification = async (event, context, callback) => {
  console.log('Event: ', JSON.stringify(event, null, 2));
  const data = JSON.parse(event.body);
  const { message, phoneNumber } = data;

  sendTextMessages(message, phoneNumber);

  callback(null, createResponse(200, { sent: true }));
};

const sendTextMessages = async (message, phoneNumber) => {
  await publish(message, phoneNumber);
};

const createResponse = (statusCode, message) => ({
  statusCode,
  body: JSON.stringify(message, null, 2),
  isBase64Encoded: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});
