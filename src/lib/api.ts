//nodemailer
export const sendJobDetails = async (data: object) => {
  fetch("/api/job", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Error sending job details");
    return res.json();
  });
};

export const sendDetails = async (formData: object) => {
  try {
    const response = await fetch("/api/job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      console.log("Email sent successfully");
      console.log(response);
    } else {
      console.error("Error sending email:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
