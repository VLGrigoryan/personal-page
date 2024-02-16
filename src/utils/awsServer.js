const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

const app = express();
const port = 3001; // Use the port you've chosen

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// AWS SDK setup
AWS.config.update({
 
  
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

app.post('/contact', (req, res) => {
  const { name, email, phoneNumber } = req.body;

  // Email content
  const params = {
    Destination: {
      ToAddresses: ['example@live.com'], // Replace with the recipient's email address
    },
    Message: {
      Body: {
        Text: {
          Data: `
            Name: ${name}
            Email: ${email}
            Phone Number: ${phoneNumber}
          `,
        },
      },
      Subject: { Data: 'New Contact Form Submission' },
    },
    Source: 'example@live.com', // Replace with the sender's email address (verified in SES)
  };

  // Send email using SES
  ses.sendEmail(params, (error, data) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', data);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});