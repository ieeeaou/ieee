document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");
  
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      navList.classList.toggle("show");
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
      reset: true,
      duration: 2000,
      distance: '50px',
      interval: 100,
    });
  
    sr.reveal('.home-section', {
      origin: 'top',
    });
  
    sr.reveal('.about-section', {
      origin: 'left',
    });
  
    sr.reveal('.ieee-aou-section', {
      origin: 'bottom',
    });
  
    sr.reveal('.ieee-section-container', {
      origin: 'top',
    });
  });
  
  