const faqs = document.querySelectorAll(".text");

faqs.forEach((faq) => {
  if (faqs >= 1)
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
