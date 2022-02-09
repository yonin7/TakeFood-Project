const sgMail = require('@sendgrid/mail');
require('dotenv').config();
const sedngridAPIKey = process.env.SEND_GRID_KEY;
// const sedngridAPIKey =
//   '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';

sgMail.setApiKey(sedngridAPIKey);

const sendWelcomeEmail = (email, name, emailToken) => {
  sgMail.send({
    to: email,
    from: 'sending974@gmail.com', //domain
    subject: 'Verification',
    text: `${name} welcome to my first app`,
    html:
      '<div style =' +
      'width:100%; height:100%;  ' +
      '><h1 style=' +
      'font-weight:500>Hey, ' +
      name +
      '<br>Welcome to TakeFood</h1><h1>Thanks for Signing up on our app</h1><h3>Your Code for verification is : ' +
      emailToken +
      ' </h3></div><p>If this request is not made by you kindly ignore this mail.</p><p>Regards, <strong>Food Eazy</strong></p>',
  });
};

module.exports = {
  sendWelcomeEmail,
};
