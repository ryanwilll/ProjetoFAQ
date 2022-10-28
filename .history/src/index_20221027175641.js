const faqs = document.querySelectorAll(".text");
const faqsActive = document.querySelectorAll("active");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
