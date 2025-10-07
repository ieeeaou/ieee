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

function meet_our_team() {
  const teamImg = document.getElementById("customAlertTeamImage");
  teamImg.style.display = "block";
  document.body.style.overflow = "hidden";
}

function close_team() {
  const teamImg = document.getElementById("customAlertTeamImage");
  teamImg.style.display = "none";
  document.body.style.overflow = "auto";
}

function toggleOverlay(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function close_btn(buttonElement) {
  const overlay = buttonElement.closest(".continue-overlay");
  if (overlay) {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navlinks = document.getElementById('navlinks');
    const navlinkOpen = document.getElementById('navlink-open');

    if (!hamburger) return;
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';

    hamburger.addEventListener('click', () => {
        navlinks.classList.toggle('show');
        hamburger.innerHTML = navlinks.classList.contains('show')
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
            document.body.style.overflow = navlinks.classList.contains('show') ? 'hidden' : 'auto';
            navlinkOpen.style.display = navlinks.classList.contains('show') ? 'block' : 'none';
          });
          
          navlinkOpen.addEventListener('click', () => {
            navlinks.classList.remove('show');
            document.body.style.overflow = navlinks.classList.contains('show') ? 'hidden' : 'auto';
        navlinkOpen.style.display = 'none';
        hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});


