const faqs = document.querySelectorAll(".text");
const faqAtiva = document.querySelectorAll("active");

faqs.forEach((faq, faqAtiva) => {
  if (faqAtiva >= 1){
    faqs
  }
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
