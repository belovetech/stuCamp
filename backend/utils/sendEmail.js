const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1). Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2). Define options
  const emailOptions = {
    from: 'Abeeb Raheem <admin@stucamp.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 3). Send the actual email
  await transporter.sendMail(emailOptions);
};

module.exports = sendEmail;
