const faqs = document.querySelectorAll(".text");


faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if ('active' >= 1){}
    
    faq.classList.toggle("active");
  });
});
