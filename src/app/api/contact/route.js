import sgMail from "@sendgrid/mail";

export async function POST(req, res) {
  const formData = await req.json();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "info@thebeardeddeveloper.co.uk", // Change to your recipient
    from: "info@thebeardeddeveloper.co.uk", // Change to your verified sender
    subject: "Website Submission",
    text: JSON.stringify(formData, null, 2),
    html: JSON.stringify(formData, null, 2),
  };
  sgMail
    .send(msg)
    .then(() => {
      return Response.json({ message: "Email sent" });
    })
    .catch((error) => {
      return Response.json({ message: "Email not sent", error: error.message });
    });
}
