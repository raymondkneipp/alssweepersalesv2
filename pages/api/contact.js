const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  return new Promise((resolve, reject) => {
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
    const { name, email, msg } = req.body;

    let safeMsg = msg;

    safeMsg = safeMsg.replace(/<style([\s\S]*?)<\/style>/gi, "");
    safeMsg = safeMsg.replace(/<script([\s\S]*?)<\/script>/gi, "");
    safeMsg = safeMsg.replace(/<\/div>/gi, "\n");
    safeMsg = safeMsg.replace(/<\/li>/gi, "\n");
    safeMsg = safeMsg.replace(/<li>/gi, "  *  ");
    safeMsg = safeMsg.replace(/<\/ul>/gi, "\n");
    safeMsg = safeMsg.replace(/<\/p>/gi, "\n");
    safeMsg = safeMsg.replace(/<br\s*[\/]?>/gi, "\n");
    safeMsg = safeMsg.replace(/<[^>]+>/gi, "");

    const mail = {
      // to: "dsstazz@gmail.com",
      to: "raymond.f.kneipp@gmail.com",
      from: "Raymond Kneipp <notification@raymondkneipp.com>",
      subject: "Message From Customer",
      text: `Customer Name: ${name}\nCustomer Email: ${email}\nMessage: ${safeMsg}`,
      html: `
      <h1>Al's Sweeper & Sewing Center</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${safeMsg}</p>
    `,
    };

    sgMail
      .send(mail)
      .then((res) => {
        res.status(200).end();
        resolve();
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        return resolve();
      });
  });
}
