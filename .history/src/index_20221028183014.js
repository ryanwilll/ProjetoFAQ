const faqs = document.querySelectorAll(".text");
const faqAtiva = document.querySelectorAll("active");


faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
