const faqs = document.querySelectorAll(".text");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if (faqs >= 1) {
      faq.classList.remove("active");
    } else {
      faq.classList.toggle("active");
    }
  });
});
