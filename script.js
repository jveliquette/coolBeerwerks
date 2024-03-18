'use strict';

/* Preload */
/* Loading will end after document is loaded */

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})

// This function toggles the styling of my hamburger icon. The "open" class is used in CSS to control the appearance of the hamburger menu.
// Calling this function switches between the open and closed states of the menu and icon.
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


/* Automatic Slideshow */
// document.addEventListener('DOMContentLoaded', function () {
//     const slider = document.querySelector('.slider');
//     const slides = document.querySelectorAll('.slider img');
//     const totalSlides = slides.length;
//     const slideWidth = slides[0].clientWidth; // Assuming all slides have the same width
//     const autoScrollSpeed = 1.5; // Adjust this value to control automatic scroll speed
//     const delayBeforeResuming = 50; // Adjust this value to control the delay before resuming automatic scrolling (in milliseconds)
//     let scrollSpeed = autoScrollSpeed; // Initial scroll speed
//     let scrollPos = 0;
//     let isScriptScrolling = true; // Flag to indicate whether scrolling is initiated by the script or the user
//     let isScrolling = false; // Flag to indicate whether manual scrolling is in progress
//     let resumeTimeout; // Timeout for resuming automatic scrolling

//     // Set the width of the slider to contain all slides
//     slider.style.width = `${slideWidth * totalSlides}px`;

//     function scrollLoop() {
//         if (isScriptScrolling) {
//             scrollPos += scrollSpeed;
//             if (scrollPos >= slideWidth) {
//                 scrollPos -= slideWidth;
//                 slider.appendChild(slider.firstElementChild.cloneNode(true)); // Move the first slide to the end for continuous loop
//                 slider.style.transform = `translateX(-${scrollPos}px)`;
//                 slider.removeChild(slider.firstElementChild); // Remove the first slide after moving it
//             } else {
//                 slider.style.transform = `translateX(-${scrollPos}px)`;
//             }
//         }
//         requestAnimationFrame(scrollLoop);
//     }

//     // Clone the slides to ensure continuous looping
//     for (let i = 0; i < totalSlides - 1; i++) {
//         const cloneSlide = slides[i].cloneNode(true);
//         slider.appendChild(cloneSlide);
//     }

//     // Start the scroll loop
//     scrollLoop();

//     // Detect manual scrolling by the user
//     slider.addEventListener('scroll', function() {
//         isScrolling = true;
//         isScriptScrolling = false; // Disable automatic scrolling when user scrolls
//         clearTimeout(resumeTimeout); // Clear any existing timeout
//     });

//     // Check if manual scrolling has ended and schedule automatic scrolling to resume
//     slider.addEventListener('scrollend', function() {
//         isScrolling = false;
//         resumeTimeout = setTimeout(function() {
//             isScriptScrolling = true; // Resume automatic scrolling
//         }, delayBeforeResuming);
//     });
// });
