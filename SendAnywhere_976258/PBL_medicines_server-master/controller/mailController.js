require('dotenv').config()
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen')

exports.sendMail = (req, res) => {

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_ID, // Replace with your Gmail email address
      pass: process.env.PASS // Replace with your Gmail email password
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'developmentmailvarad@gmail.com', // Replace with your Gmail email address
    to: `${req.body.email}`, // Replace with recipient email address
    subject: 'Prescription Generated', // Replace with subject of your email
    html: `<h4>Hello</h4><p>Your patients medical prescription is generated by hospital please check that at :<a href='https://med-dashboard.onrender.com/consent/${req.body._id}'>Click Here</a></p><h4>Thank You !!</h4>`,// Replace with the body of your email
  };


  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400).json({ 'Error': error });
    } else {
      res.status(200).json({ 'Email sent successfully': info.response });
    }
  });


}

exports.sendDeliveryMail = (req, res) => {

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_ID, // Replace with your Gmail email address
      pass: process.env.PASS // Replace with your Gmail email password
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'developmentmailvarad@gmail.com', // Replace with your Gmail email address
    to: `${req.body.email}`, // Replace with recipient email address
    subject: 'Medicines Delivered', // Replace with subject of your email
    html: `<h4>Hello</h4><p>Your patients medicines are delivered !!! </p><h4>Thank You !!</h4>`,// Replace with the body of your email
  };


  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400).json({ 'Error': error });
    } else {
      res.status(200).json({ 'Email sent successfully': info.response });
    }
  });
}

exports.sendNotAvail = (req, res) => {

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_ID, // Replace with your Gmail email address
      pass: process.env.PASS // Replace with your Gmail email password
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'developmentmailvarad@gmail.com', // Replace with your Gmail email address
    to: `${req.body.email}`, // Replace with recipient email address
    subject: 'Prescription Generated', // Replace with subject of your email
    html: `<h4>Hello</h4><p>Your patients medical prescription is generated by hospital please check that at :<a href='https://med-dashboard.onrender.com/consent/${req.body._id}'>Click Here</a><br>But your medicines are not available at hospital's medical store please take screenshot of prescription and click on "NO"</p><h4>Thank You !!</h4>`,// Replace with the body of your email
  };


  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400).json({ 'Error': error });
    } else {
      res.status(200).json({ 'Email sent successfully': info.response });
    }
  });


}