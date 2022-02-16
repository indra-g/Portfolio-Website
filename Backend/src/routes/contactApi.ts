const transporter = require("../config/nodemailerTranspoter.js");
import Express from "express";
const routes = Express.Router();

routes.post("/sendEmail", async (req, res) => {
  const name = req.body.name;
  const userEmail = req.body.email;
  const phoneNo = req.body.phoneNo;
  const message = req.body.message;

  let mailOptions = {
    from: "indrashekar406@gmail.com",
    to: "indrashekar406@gmail.com",
    subject: "This is the message from your portfolio website",
    html: `<h1>Name: ${name}<br/>
    <h2>Sender emailaddress: ${userEmail}<br/>
    ${phoneNo && `<h2>PhoneNumber: +91 ${phoneNo}</h2><br/>`}
      <h3>${message}</h3>
    </h1>`,
  };

  await transporter.sendMail(mailOptions, function (err: string, data: any) {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send("Message sent succesfully");
    }
  });
});

export default routes;
