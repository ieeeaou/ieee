document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
      reset: true,
      duration: 2000,
      distance: '50px',
      interval: 100,
    });
  
    sr.reveal('.home-content', { origin: 'left' });
    sr.reveal('.about-content', { origin: 'left' });
    sr.reveal('.ieee-aou-section', { origin: 'bottom' });
    sr.reveal('.ieee-section-container', { origin: 'left' });

    sr.reveal('.team-member', {origin: 'left',});

    sr.reveal('.join-video', { origin: 'left' });
    sr.reveal('.membership-card', { origin: 'bottom', });
  });


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