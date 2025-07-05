// This code was created by WerDeveloper.
// Unauthorized copying, distribution, or modification of this code, in whole or in part, is strictly prohibited without prior written permission.
// Please do not remove or alter the credit to the original creator. If you wish to use this code for personal or commercial purposes, kindly contact the creator for permissions.
// Thank you for respecting the work and effort that went into creating this code.


// Typing Effect
var typed = new Typed('#wrd', {
    strings: ['Python Programming','C Programming', 'C++ Programming', 'Java Programming', 'VuFind', 'Folio'],
    typeSpeed: 100,
    loop: true
});

// menubar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// popup window
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function copyUPI() {
    var upiId = document.getElementById('upi-id').textContent;
    navigator.clipboard.writeText(upiId).then(function() {
        alert('UPI ID copied to clipboard');
    }, function() {
        alert('Failed to copy UPI ID');
    });
}

// footer 
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('.footer');
    const footerOffsetTop = footer.offsetTop;
    const footerHeight = footer.offsetHeight;

    function checkFooterVisibility() {
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > footerOffsetTop + footerHeight / 4) {
            footer.classList.add('footer-animation');
        }
    }

    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility();
});

// my skill 
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;
const slideInterval = 2000;

function updateSlidePosition() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlidePosition();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlidePosition();
});

function autoSlide() {
    index = (index + 1) % images.length;
    updateSlidePosition();
}

setInterval(autoSlide, slideInterval);


// This code was created by WerDeveloper.
// Unauthorized copying, distribution, or modification of this code, in whole or in part, is strictly prohibited without prior written permission.
// Please do not remove or alter the credit to the original creator. If you wish tfo use this code for personal or commercial purposes, kindly contact the creator for permissions.
// Thank you for respecting the work and effort that went into creating this code.