const faqs = document.querySelectorAll(".text");
const faqsActive = document.qu
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
