const faqs = document.querySelectorAll(".text");
const faqAtiva = document.querySelectorAll("active");

faqs.forEach((faq, faqAtiva) => {
  if (faqAtiva >= 1) {
    faq.classList.remove("active");
  }else{

  
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  
  }});
});
