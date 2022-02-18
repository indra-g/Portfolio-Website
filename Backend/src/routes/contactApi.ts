const transporter = require("../config/nodemailerTranspoter.js");
import Express from "express";
const routes = Express.Router();

routes.post("/sendEmail", async (req, res) => {
  const name = req.body.name;
  const userEmail = req.body.email;
  const phoneNo = req.body.phoneNo;
  const message = req.body.message;
  let informationIsValid = false;

  const checkEmail = (email: string) => {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      return true;
    }
    return false;
  };

  if (
    name.trim().length !== 0 ||
    message.trim().length !== 0 ||
    checkEmail(userEmail)
  ) {
    informationIsValid = true;
  }

  if (!informationIsValid) {
    return res.status(400).send("Entered Information is invalid");
  }

  let mailOptions = {
    from: "indrashekar406@gmail.com",
    to: "indrashekar406@gmail.com",
    subject: "This is the message from your portfolio website",
    html: `<h1>Name: ${name}<br/>
    <h2>Sender email address: ${userEmail}<br/>
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
