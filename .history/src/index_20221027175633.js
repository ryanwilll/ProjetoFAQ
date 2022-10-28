const faqs = document.querySelectorAll(".text");
const faqsActive = document.quer
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
