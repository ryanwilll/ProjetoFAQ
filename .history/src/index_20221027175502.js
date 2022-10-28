const faqs = document.querySelectorAll(".text");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if faq.classList.contains("active"){
      faq
    }
    faq.classList.toggle("active");
  });
});
