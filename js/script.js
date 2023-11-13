
let navigationelement = document.getElementById('navblock');
let burgerbar = document.getElementById('burgerblock');

burgerbar.addEventListener('click', function () {
    navigationelement.classList.toggle("newnavigation");
});

$(document).ready(function () {
    // Initialize Slick slider
    $('.slider').slick({
        slidesToShow: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        Infinity: false,
        responsive: [
            {
                breakpoint: 768, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                    Infinity: true
                },
            },
            {
                breakpoint: 992, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1200, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    });

    // Change the dot color to orange for both active and inactive dots
    $('.slider .slick-dots li button').css('color', 'orange');
});

window.addEventListener('load', function () {
    const welcomeAnimation = document.querySelector('.welcome-animation');
    welcomeAnimation.style.animation = 'none'; // Reset animation
    welcomeAnimation.offsetHeight; // Trigger a reflow
    welcomeAnimation.style.animation = null; // Re-enable animation

    // Add an event listener to remove the element when the animation ends
    welcomeAnimation.addEventListener('animationend', function () {
        welcomeAnimation.remove();
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
}

window.addEventListener('load', scrollToTop);

  