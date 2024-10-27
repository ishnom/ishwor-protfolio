// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

function openCV() {
  window.open('cv-ishwor.pdf', '_blank'); // Opens the PDF in a new tab
}
function viewProject(event) {
  // Detect if the device is mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    event.preventDefault(); // Prevents opening the link
    alert("This project cannot open on mobile; it requires a PC.");
  }
}
document.querySelector('.menu a[href="#projects"]').addEventListener('click', function (event) {
  event.preventDefault();
  const targetSection = document.getElementById('projects');
  const offsetTop = targetSection.offsetTop - 105 // Adjust -50 as needed

  window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
  });
});


