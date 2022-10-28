const faqs = document.querySelectorAll(".text");
const faqAtiva = document.querySelectorAll("active");

faqs.forEach((faq, faqAtiva) => {
  faq.addEventListener("click", () => {
  if (faqAtiva >= 1) {
    faq.classList.remove("active");
  }else
  {
    faq.classList.toggle("active");
  });
});
