const faqs = document.querySelectorAll(".text");


faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if ('.text.active' >= 1){}
    
    faq.classList.toggle("active");
  });
});
