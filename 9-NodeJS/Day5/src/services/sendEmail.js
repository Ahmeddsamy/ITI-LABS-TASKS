import nodemailer from "nodemailer";
import { emailTemplate } from "./emailTemplate.js";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.verificationMail,
    pass: process.env.verificationMailPassword,
  },
});

// async..await is not allowed in global scope, must use a wrapper
export async function sendVerificationMail(email, url) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Ahmed Samy" <${process.env.verificationMail}>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: emailTemplate(url), // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}
