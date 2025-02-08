import { gsap } from 'gsap';

// Menu State
let isMenuOpen = false;

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.querySelector('.menu-overlay');
const menuLinks = document.querySelectorAll('.menu-links a');

// Timeline for menu animation
const menuTl = gsap.timeline({ paused: true });

// Setup menu animation
menuTl
  .to('.menu-overlay', {
    visibility: 'visible',
    opacity: 1,
    duration: 0.5,
    ease: 'power2.inOut'
  })
  .from('.menu-links a', {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.4,
    ease: 'power2.out'
  });

// Hamburger click handler
hamburger.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  
  // Animate hamburger
  gsap.to('.line:first-child', {
    rotate: isMenuOpen ? 45 : 0,
    y: isMenuOpen ? 8 : 0,
    duration: 0.4
  });
  
  gsap.to('.line:last-child', {
    rotate: isMenuOpen ? -45 : 0,
    y: isMenuOpen ? -8 : 0,
    duration: 0.4
  });

  // Play or reverse menu animation
  if (isMenuOpen) {
    menuTl.play();
  } else {
    menuTl.reverse();
  }
});

// Close menu when clicking a link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    isMenuOpen = false;
    menuTl.reverse();
    
    gsap.to('.line:first-child', {
      rotate: 0,
      y: 0,
      duration: 0.4
    });
    
    gsap.to('.line:last-child', {
      rotate: 0,
      y: 0,
      duration: 0.4
    });
  });
});