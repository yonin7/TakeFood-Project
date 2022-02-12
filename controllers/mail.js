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
      // '<div style =' +
      // 'width:100%; height:100%;  ' +
      // '><h1 style=' +
      // 'font-weight:500>Hey, ' +
      // name +
      // '<br>Welcome to TakeBis</h1><h1>Thanks for Signing up on our app</h1><h3>Your Code for verification is : ' +
      // emailToken +
      // ' </h3></div><p>If this request is not made by you kindly ignore this mail.</p><p>Regards, <strong>TakeBis</strong></p>' +
      ` <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
      <tr>
        <td align="center" style="padding:0;">
          <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
            <tr>
              <td align="center" style="padding:40px 0 30px 0;background:#007BFF;">
                <img src="https://assets.codepen.io/210284/h1.png" alt="" width="300" style="height:auto;display:block;" />
              </td>
            </tr>
            <tr>
              <td style="padding:36px 30px 42px 30px;">
                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                  <tr>
                    <td style="padding:0 0 36px 0;color:#153643;">
                      <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">${name}, Welcome to TakeBis</h1>
                      <h4 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Thanks for Signing up on our app</h4>                      
                      <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">
                      Your Code for verification is : ${emailToken}
                      <br>
                      If this request is not made by you kindly ignore this mail.
                      <br>
                      Regards, TakeBis.</p>
                    </td>
                  </tr>
                 
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;background:#007BFF;">
                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                  <tr>
                    <td style="padding:0;width:50%;" align="left">
                      <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                        &reg; Someone, Somewhere 2021<br/><a href="http://www.example.com" style="color:#ffffff;text-decoration:underline;">Unsubscribe</a>
                      </p>
                    </td>
                    <td style="padding:0;width:50%;" align="right">
                      <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                        <tr>
                          <td style="padding:0 0 0 10px;width:38px;">
                            <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/tw_1.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                          </td>
                          <td style="padding:0 0 0 10px;width:38px;">
                            <a href="http://www.facebook.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`,
  });
};

const sendOrderEmail = (email, name, order) => {
  sgMail.send({
    to: email,
    from: 'sending974@gmail.com', //domain
    subject: 'Order Confirmation',
    text: `That was easy!`,
    html:
      'Hi, <strong>' +
      name +
      '</strong><h2>Order Successfully Placed!</h2><h3><p>Thank you for ordering from TakeBis</h3> Your order id: ' +
      order.order_id +
      "</p><p style='text-align: left;'>Regards, <h1>TakeBis</h1></>",
  });
};

module.exports = {
  sendWelcomeEmail,
  sendOrderEmail,
};
