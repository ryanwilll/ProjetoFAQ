const faqs = document.querySelectorAll(".text");

const ativos = document.q


faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
