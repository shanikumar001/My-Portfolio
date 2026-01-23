export const contactAPI = {
  submit: async (formData) => {
    const res = await fetch("http://localhost:4000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Failed to submit");
    }

    return res.json();
  },
};
