const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  console.log(email, name);
  sgMail.send({
    to: email,
    from: 'dasheva.dasha@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: `Welcome to Task Manager, ${name}`,
  });
};

const sendCancelationEmail = (email, name) => {
  console.log(email, name);
  sgMail.send({
    to: email,
    from: 'dasheva.dasha@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: `Thank you for using Task Manager, ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
