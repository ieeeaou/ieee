document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");

      faqItems.forEach((otherItem) => {
        if (otherItem != item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });
});