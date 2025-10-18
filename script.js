document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const sideBar = document.querySelector(".sidebar");
  const navBar = document.querySelector(".navbar");

  // Match when screen is wider than 768px
  const mq = window.matchMedia("(min-width: 769px)");

  let moved = false; // Track if navLinks are currently in the sidebar

  // 🔹 Handle the menu button click
  menuButton.addEventListener("click", () => {
    // Toggle sidebar visibility
    sideBar.classList.toggle("active");
    navLinks.classList.toggle("active");

    // Move navLinks depending on state
    if (!moved) {
      sideBar.appendChild(navLinks);  // move links into sidebar
    } else {
      navBar.appendChild(navLinks);   // move links back to navbar
    }

    moved = !moved; // flip the state
  });

  // 🔹 Handle width changes
  function handleWidthChange(e) {
    if (e.matches) {
      // Screen is wider than 768px
      navBar.appendChild(navLinks);     // move nav back to navbar
      sideBar.classList.remove("active"); // hide sidebar
      navLinks.classList.remove("active");
      moved = false;
    } else {
      // Screen is 768px or smaller
      // Don’t automatically open sidebar — wait for button click
      sideBar.classList.remove("active");
      navLinks.classList.remove("active");
      moved = false; // reset state
    }
  }

  // Run once on load
  handleWidthChange(mq);

  // Watch for window size changes
  mq.addEventListener("change", handleWidthChange);
});
