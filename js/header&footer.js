document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("dynamic-header");
  const headerContent = `
    <div class="header-name">
      <a href="#HOME">
        <img src="images/logo-removebg-preview.png" alt="ieee logo" />
      </a>
    </div>
    <!-- Hamburger Menu -->
    <input type="checkbox" id="menu-checkbox" class="menu-checkbox" />
    <label for="menu-checkbox" class="menu-toggle">
      <div></div>
      <div></div>
      <div></div>
    </label>
    <!-- Overlay screen -->
    <label for="menu-checkbox" class="ALLSCREEN"></label>
    <nav id="navbar">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="join.html">Join</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  `;

  headerContainer.innerHTML = headerContent;
});

// footer content

document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("dynamic-footer");
  const footerContent = `
<footer class="ieee-footer">
  <div class="footer-container">
    <!-- Logo Section -->
    <div class="footer-section logo-section">
      <div class="logo-container">
        <img src="images/white_logo-removebg-preview.png" alt="IEEE AOU Logo" class="footer-logo">
      </div>
      <p class="footer-description">IEEE Arab Open University Student Branch - Promoting technological innovation for the benefit of humanity.</p>
    </div>

    <!-- Quick Links Section -->
    <div class="footer-section links-section">
      <h3 class="footer-heading">Quick Links</h3>
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About IEEE AOU</a></li>
        <li><a href="events.html">Events & Activities</a></li>
        <li><a href="join.html">Join IEEE AOU</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="https://www.aou.edu.lb" target="_blank">AOU LB Website</a></li>
      </ul>
    </div>

    <!-- Social Media Section - IEEE AOU -->
    <div class="footer-section social-section">
      <h3 class="footer-heading">IEEE AOU Social</h3>
      <div class="social-icons">
        <a href="https://www.instagram.com/ieee_aou_lebanon" aria-label="IEEE AOU Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://whatsapp.com/channel/0029VavRghFFCCoO0GJ0ca2B" aria-label="IEEE AOU WhatsApp"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>

    <!-- Social Media Section - AOU University -->
    <div class="footer-section social-section">
      <h3 class="footer-heading">AOU University Social</h3>
      <div class="social-icons">
        <a href="https://www.instagram.com/aou_lebanon" aria-label="AOU Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/school/arab-open-university/" aria-label="AOU LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.facebook.com/share/19fhRcp592/" aria-label="AOU Facebook"><i class="fab fa-facebook-f"></i></a>
      </div>
    </div>
  </div>

  <!-- Copyright Section -->
  <div class="copyright-section">
    <p>&copy; <span id="year"></span> IEEE Arab Open University Student Branch. All Rights Reserved.</p>
  </div>
</footer>

<script>
  // Auto-update copyright year
  document.getElementById('year').textContent = new Date().getFullYear();
</script>
    `;
  footerContainer.innerHTML = footerContent;
});
