const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {

    try {

        const { name, email, mobile, message } = req.body;

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {

                user: process.env.EMAIL_USER,

                pass: process.env.EMAIL_PASS,

            },

        });

        const mailOptions = {

            from: process.env.EMAIL_USER,

            to: process.env.EMAIL_USER,

            subject: "New Portfolio Contact",

            html: `

            <h2>New Contact Form Submission</h2>

            <p><strong>Name :</strong> ${name}</p>

            <p><strong>Email :</strong> ${email}</p>

            <p><strong>Mobile :</strong> ${mobile}</p>

            <p><strong>Message :</strong></p>

            <p>${message}</p>

            `,

        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({

            success: true,

            message: "Email Sent Successfully",

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Something Went Wrong",

        });

    }

};

module.exports = {

    sendMail,

};