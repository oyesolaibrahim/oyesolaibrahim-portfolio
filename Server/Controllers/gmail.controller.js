const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const sentMessageToGmail = (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(req.body)
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message from your website, ${subject}` ,
    text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
};

module.exports = sentMessageToGmail;