const faqs = document.querySelectorAll(".text");

cpnmt;

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
