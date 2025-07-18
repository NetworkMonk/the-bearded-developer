export async function POST(req, res) {
  try {
    const formData = await req.json();
    if (!formData || !formData.name || !formData.email || !formData.message) {
      return Response.json({ message: "Invalid form data" }, { status: 400 });
    }

    // Extract all key value pairs from the form data
    const formEntries = Object.entries(formData);

    // Send email using SMTP2GO
    const smtp2goUrl = `https://api.smtp2go.com/v3/email/send`;
    const smtp2goHeaders = {
      "Content-Type": "application/json",
      "X-Smtp2go-Api-Key": `${process.env.SMTP2GO_API_KEY}`,
      Accept: "application/json",
    };
    const smtp2goData = {
      sender: "info@thebeardeddeveloper.co.uk",
      to: ["info@thebeardeddeveloper.co.uk"],
      subject: "Website Submission",
      text_body: formEntries
        .map((entry) => `${entry[0]}: ${entry[1]}`)
        .join("\n"),
      html_body: `<p>${formEntries
        .map((entry) => `<strong>${entry[0]}:</strong> ${entry[1]}`)
        .join("<br>")}</p>`,
    };
    const result = await fetch(smtp2goUrl, {
      method: "POST",
      headers: smtp2goHeaders,
      body: smtp2goData ? JSON.stringify(smtp2goData) : null,
    });
    if (!result.ok) {
      const errorData = await result.json();
      return Response.json(
        { message: "Email not sent", error: errorData },
        { status: 500 }
      );
    }
    return Response.json({ message: "Email sent successfully" });
  } catch (e) {
    return Response.json({ message: "Email not sent", error: e.message });
  }
}
