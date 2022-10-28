const faqs = document.querySelectorAll(".text");
const faqAtiva = document.quer



faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
