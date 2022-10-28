const faqs = document.querySelectorAll(".text");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if (faq.classList.contains === "active"){
      faq.classList.remove;
    } faq.classList.toggle("active");
  });
});
