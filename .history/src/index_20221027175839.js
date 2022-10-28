const faqs = document.querySelectorAll(".text");
const faqsActive = document.querySelectorAll("active");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if ("active" >= 1) {
      faq.classList.remove("active");
    }
    faq.classList.toggle("active");
  });
});
