const mailer = require("../nodemailer");

const userRegistrationControllerPost = (req, res) => {
  console.log("body", req.body);

  if (!req.body.email || !req.body.text) return res.sendStatus(400);
  const message = {
    to: process.env.EMAIL, //почта на которую отправляется письмо
    subject: "Письмо с сайта ItBeard",
    html: `
          <h2>Поздравляем, Вы успешно зарегистрировались на нашем сайте!</h2>

          <i>данные вашей учетной записи:</i>
          <ul>
              <li>email: ${req.body.email}</li>

              <li>email text: ${req.body.text}</li>

          </ul>
         
          `
  };
  mailer(message);

  res.status(200).send("email отпрвлен!");
};

module.exports = {
  userRegistrationControllerPost
};