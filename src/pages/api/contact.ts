import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';



let smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: 'onakoyakayode@gmail.com', // replace with your email address
    pass:'fxohxgqxzitufdeb' // replace with your email password
  },
})

export default async function contactHandler(
    req: NextApiRequest, 
    res: NextApiResponse
    ) {
  if (req.method === 'POST') {
    const {email,name,message} = req.body

    const mailOptions = {
      from: email,
      to: 'onakoyakayode@gmail.com', // replace with your email address
      subject: `New message from ${name} (${email})`,
      text: message,
    }

    try {
      await smtpTransport.sendMail(mailOptions)
      res.status(200).end("Hello, world!")
    //   res.json({message:'Registration Successful'}) 
      console.log('h')
    // res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error)
      res.status(500).end()
    }
  } else {
    res.status(405).end()
  }
}