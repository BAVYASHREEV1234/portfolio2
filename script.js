// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");
    this.reset();
});

// Email validation function
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}


window.onload = function() {
    const skillBars = document.querySelectorAll('.skill-level');
  
    skillBars.forEach(skill => {
      const width = skill.style.width;
      skill.style.width = '0';
      setTimeout(() => {
        skill.style.transition = 'width 2s';
        skill.style.width = width;
      }, 500);
    });
  };


// script.js
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

  