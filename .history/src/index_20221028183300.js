const faqs = document.querySelectorAll(".text");

const ativos = document.querySelectorAll("")


faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
