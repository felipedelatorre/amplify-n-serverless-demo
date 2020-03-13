const AWS = require('aws-sdk');

const sns = new AWS.SNS();

module.exports.publish = (message, phoneNumber) => {
  const phone = `${phoneNumber}`.replace('+1', '');
  const params = {
    Message: message,
    PhoneNumber: `+1${phone}`,
  };

  return sns.publish(params).promise();
};
