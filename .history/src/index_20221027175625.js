const faqs = document.querySelectorAll(".text");
const faqs
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
