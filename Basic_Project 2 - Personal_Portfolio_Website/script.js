document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("response");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      response.textContent = "Thank you for reaching out! I’ll get back to you soon.";
      form.reset();
    });
  }
});