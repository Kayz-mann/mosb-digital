export const sendContract = async (data: object) => {
    fetch("/api/contract", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    }).then((res) => {
      if (!res.ok) throw new Error("Error sending job details");
      return res.json();
    });
  };
  