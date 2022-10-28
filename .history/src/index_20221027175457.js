const faqs = document.querySelectorAll(".text");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if faq.classList.contains("")
    faq.classList.toggle("active");
  });
});
