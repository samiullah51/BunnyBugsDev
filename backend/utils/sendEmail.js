const nodemailer = require("nodemailer");
// Send Email
const sendEmail = (receiverName, email) => {
  // Step 1
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER, // TODO: your gmail account
      pass: process.env.PASS, // TODO: your gmail password
    },
  });
  // Step 2
  let mailOptions = {
    from: "mernstack51729@gmail.com", //  email sender
    to: email, // email receiver
    subject: "BunnyBugsDev Software Company",
    html: `Dear ${receiverName}, We will get back to you Soon. Thanks`,
  };
  //  Step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return console.log(err);
    }
    return console.log("Email sent successfully");
  });
};

module.exports = sendEmail;
