const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'luviodoacoes@gmail.com',
    pass: 'yecjanxddtfkvwzz'
  }
}));

module.exports = transporter;
