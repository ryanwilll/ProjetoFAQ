const faqs = document.querySelectorAll(".text");


faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if ('active' >= 1){
      faq.classList.remove
    }
    
    faq.classList.toggle("active");
  });
});
