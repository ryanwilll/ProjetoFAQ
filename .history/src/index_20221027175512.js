const faqs = document.querySelectorAll(".text");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if faqs.classList.contains("active"){
      faq.classList.remove
    }
    faq.classList.toggle("active");
  });
});
