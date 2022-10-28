const faqs = document.querySelectorAll(".text");
const faqAtiva = document



faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
