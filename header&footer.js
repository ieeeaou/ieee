document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById("dynamic-footer");
      const footerContent = `
    <footer id="dynamic-footer">
      <img src="images/white_logo-removebg-preview.png">
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="join.html">Join</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <div class="social-media">
        IEEE:
        <a href="https://www.instagram.com/ieee_aou_lebanon" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://whatsapp.com/channel/0029VavRghFFCCoO0GJ0ca2B" target="_blank"><i class="fab fa-whatsapp"></i></a>
      </div>
      <div class="social-media">
        AOU:
        <a href="https://www.instagram.com/aou_lebanon" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://web.aou.edu.lb/Pages/default.aspx" class="button" target="_blank"><i class="fas fa-university"></i></a>
      </div>
      <div class="footer-p">
        <p>&copy; 2024 AOU Arab Open University || All rights reserved.</p>
        <p>Contact us: ieeeaou@gmail.com | Lebanon</p>
      </div>
    </footer>
    `;
      footerContainer.innerHTML = footerContent;
  });

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