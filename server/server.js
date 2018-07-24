require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3005;

const  {
  EMAIL_USER,
  EMAIL_PASSWORD
} = process.env

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));

// NodeMailer
const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD
    }
});
  
  
  // NODE MAILER
  
app.post('/email', function create(req, res, next) {
  
    var mail = {
      from: req.body.email,
      to: EMAIL_USER,
      subject: req.body.subject,
      html: "name: <br/>" + req.body.name + "<br/> Message: <br/>" + req.body.message + "<br/> email <br/>" + req.body.email,
    }
  
    smtpTransport.sendMail(mail, function(error, response) {
      if(error) {
        console.log('email sending error');
        console.log(error);
      } else {
        console.log(response, 'email sent')
      }
      smtpTransport.close();
  
    });
  
    res.send(200, req.body);
});

app.listen(port, () => console.log('Listening on port 3005'));