document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
      body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      // Save theme preference
      if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
      } else {
        localStorage.removeItem('theme');
      }
    });

    // Dynamic animation for projects fade in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Apply a staggered animation using a delay based on index
          entry.target.style.animationDelay = `${index * 0.15}s`;
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    document.querySelectorAll('.project').forEach((el, index) => {
      // Set a CSS variable for animation delay for staggered effect
      el.style.setProperty('--animation-delay', `${index * 0.15}s`);
      observer.observe(el);
    });
  });

  // JavaScript for theme toggle functionality
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
      body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      // Save theme preference
      if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
      } else {
        localStorage.removeItem('theme');
      }
    });

    // dynamic animation for skills fade in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Apply a staggered animation using a delay based on index
          entry.target.style.animationDelay = `${index * 0.15}s`;
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    document.querySelectorAll('.skill-category').forEach((el, index) => {
      // Set a CSS variable for animation delay for staggered effect
      el.style.setProperty('--animation-delay', `${index * 0.15}s`);
      observer.observe(el);
    });
  });