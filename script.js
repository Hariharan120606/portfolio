// ===== Typed.js for rotating skills =====
var typed = new Typed('#wrd', {
    strings: ['Python Programming', 'C Programming', 'C++ Programming', 'Java Programming', 'VuFind', 'Folio'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
  
  // ===== Hamburger menu toggle =====
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // ===== Popup window functions =====
  function openPopup() {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.style.display = 'flex';
    }
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.style.display = 'none';
    }
  }
  
  // ===== Auto-update footer year =====n
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  document.addEventListener('DOMContentLoaded', () => {
    // ===== Footer animation on scroll =====
    const footer = document.querySelector('.footer');
    if (footer) {
      const offsetTop = footer.offsetTop;
      const height = footer.offsetHeight;
      function animateFooter() {
        const scrollPos = window.scrollY + window.innerHeight;
        if (scrollPos > offsetTop + height / 4) {
          footer.classList.add('footer-animation');
        }
      }
      window.addEventListener('scroll', animateFooter);
      animateFooter();
    }
  
    // ===== Progress-bar animation =====
    const skills = [
      { id: 'progress1', width: '90%' },
      { id: 'progress2', width: '85%' },
      { id: 'progress3', width: '80%' },
      { id: 'progress4', width: '75%' },
      { id: 'progress5', width: '70%' },
      { id: 'progress6', width: '90%' },
      { id: 'progress7', width: '85%' },
      { id: 'progress8', width: '80%' }
    ];
    skills.forEach(skill => {
      const el = document.getElementById(skill.id);
      if (el) {
        // slight delay to allow CSS transition
        setTimeout(() => {
          el.style.width = skill.width;
        }, 100);
      }
    });
  
    // ===== Image slider functionality =====
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    let slideIndex = 0;
    const slideInterval = 3000; // milliseconds
  
    function updateSlidePosition() {
      if (slides) {
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
      }
    }
  
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
  
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % images.length;
        updateSlidePosition();
      });
    }
  
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + images.length) % images.length;
        updateSlidePosition();
      });
    }
  
    function autoSlide() {
      slideIndex = (slideIndex + 1) % images.length;
      updateSlidePosition();
    }
  
    // start auto sliding if slider exists
    if (slides && images.length > 1) {
      setInterval(autoSlide, slideInterval);
    }
  });
  
