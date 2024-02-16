const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Choose a different port

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    token: "token",
    user: 'mail',
    pass: 'pass',
  },
});

// API endpoint to send emails
app.post('/contact', (req, res) => {
  const { name, email, phoneNumber } = req.body;

  // Email content
  const mailOptions = {
    from: 'mail',
    to: 'mail',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phoneNumber}
    `,
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
