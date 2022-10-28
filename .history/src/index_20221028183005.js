const faqs = document.querySelectorAll(".text");
const faqAtiva = document.querySelectorAll



faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
