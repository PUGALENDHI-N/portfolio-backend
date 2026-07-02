const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (req, res) => {

  try {

    const { name, email, mobile, message } = req.body;

    await resend.emails.send({

      from: "Portfolio <onboarding@resend.dev>",

      to: "pugalendhinagaraj29@gmail.com",

      subject: "New Portfolio Contact",

      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Mobile:</strong> ${mobile}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `

    });

    res.status(200).json({

      success: true,

      message: "Email Sent Successfully"

    });

  }

  catch(error){

    console.error(error);

    res.status(500).json({

      success:false,

      message:error.message

    });

  }

};

module.exports = {

  sendMail

};