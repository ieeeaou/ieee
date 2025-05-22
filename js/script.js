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

function close_btn() {
  const teamImg = document.getElementById("customAlertTeamImage");
  teamImg.style.display = "none";
  document.body.style.overflow = "auto";
}
