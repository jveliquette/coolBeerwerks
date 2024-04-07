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


// /* Slideshow Automation */
// // Get the slider container
// const slider = document.querySelector('.slider');

// // Function to animate the slideshow
// function animateSlider() {
//     // Set the initial scroll position to 0
//     let scrollPosition = 0;

//     // Define the speed of scrolling and interval duration
//     const scrollSpeed = 2; // Higher values make the scrolling faster
//     const intervalDuration = 50; // Milliseconds

//     // Define the interval function to scroll the slider
//     const scrollInterval = setInterval(function() {
//         // Increment the scroll position
//         scrollPosition += scrollSpeed;

//         // Check if we've reached the end of the slider
//         if (scrollPosition >= slider.scrollWidth - slider.clientWidth) {
//             // Reset scroll position to the beginning
//             scrollPosition = 0;
//         }

//         // Set the new scroll position
//         slider.scrollBy(scrollSpeed, 0)
//     }, intervalDuration);

//     // Add event listeners to pause the automatic scrolling when the user interacts with the slider
//     slider.addEventListener('mousedown', pauseAnimation);
//     slider.addEventListener('touchstart', pauseAnimation);
//     slider.addEventListener('wheel', pauseAnimation);

//     // Function to pause the automatic scrolling
//     function pauseAnimation() {
//         clearInterval(scrollInterval);
//     }

//     // Resume automatic scrolling when the user stops interacting with the slider
//     slider.addEventListener('mouseup', resumeAnimation);
//     slider.addEventListener('touchend', resumeAnimation);
//     slider.addEventListener('mouseleave', resumeAnimation);

//     // Function to resume automatic scrolling
//     function resumeAnimation() {
//         // Clear any existing interval to prevent multiple intervals running simultaneously
//         clearInterval(scrollInterval);

//         // Restart the automatic scrolling animation after a brief delay (adjust as needed)
//         setTimeout(animateSlider, 2000); // Resume after 2 seconds
//     }
// }

// // Call the function to start the slideshow animation
// animateSlider();
