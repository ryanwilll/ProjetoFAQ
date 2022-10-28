const faqs = document.querySelectorAll(".text");

const ativos = document.querySelectorAll("active");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if ("active" >= 1) {
      faq.classList.remove("active");
    } else {
      faq.classList.toggle("active");
    }
  });
});
