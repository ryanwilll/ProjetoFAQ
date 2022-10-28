const faqs = document.querySelectorAll(".text");

const ativos = document.querySelector


faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
