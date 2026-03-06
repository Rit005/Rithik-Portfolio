document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------
     THEME TOGGLE
  --------------------------*/
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light-mode") {
    body.classList.add("light-mode");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");

      if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light-mode");
      } else {
        localStorage.removeItem("theme");
      }
    });
  }


  /* -------------------------
     TYPING ANIMATION
  --------------------------*/
  const typingElement = document.querySelector(".typing");

  if (typingElement) {
    new Typed(".typing", {
      strings: [
        "AI & Technology Enthusiast",
        "Aspiring Software Developer",
        "Aspiring Full Stack Developer",
        "Java Developer (Fresher)"
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1200,
      loop: true
    });
  }


  /* -------------------------
     MOBILE MENU
  --------------------------*/
  const menuIcon = document.querySelector(".menu-icon");
  const navbar = document.querySelector(".navbar");

  if (menuIcon) {
    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }


  /* -------------------------
     SCROLL ANIMATION
  --------------------------*/
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.15}s`;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });


  /* Animate Projects */
  document.querySelectorAll(".project").forEach((el, index) => {
    el.style.setProperty("--animation-delay", `${index * 0.15}s`);
    observer.observe(el);
  });

  /* Animate Skills */
  document.querySelectorAll(".skill-category").forEach((el, index) => {
    el.style.setProperty("--animation-delay", `${index * 0.15}s`);
    observer.observe(el);
  });

});