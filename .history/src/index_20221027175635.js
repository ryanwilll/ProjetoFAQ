const faqs = document.querySelectorAll(".text");
const faqsActive = document.querySelectorAll
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
