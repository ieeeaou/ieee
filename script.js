document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
      reset: true,
      duration: 2000,
      distance: '50px',
      interval: 100,
    });
  
    sr.reveal('.home-container', { origin: 'top' });
    sr.reveal('.about-section', { origin: 'left' });
    sr.reveal('.ieee-aou-section', { origin: 'bottom' });
    sr.reveal('.ieee-section-container', { origin: 'left' });

    sr.reveal('.team-member', {origin: 'left',});
  
    sr.reveal('.social-media a', {
      origin: 'top',
      distance: '30px',
      duration: 1500,
      interval: 100,
    });

    sr.reveal('.join-video', { origin: 'left' });
    sr.reveal('.membership-card', { origin: 'bottom', });
  });
  
