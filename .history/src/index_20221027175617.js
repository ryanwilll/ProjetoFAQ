const faqs = document.querySelectorAll(".text");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
     faq.classList.toggle("active");
  });
});
