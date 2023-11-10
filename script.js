$(document).ready(function(){
  $('.slider').slick({
      slidesToShow: 2,  // Change the number of slides shown
      autoplay: true, // Enable autoplay
      autoplaySpeed: 3000, // Autoplay speed in milliseconds (adjust as needed)
      arrows: true, // Show navigation arrows
      dots: true, // Show pagination dots
      infinite: false  // Set infinite to false
  });
});

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
    });

    // Change the dot color to orange for both active and inactive dots
    $('.slider .slick-dots li button').css('color', 'orange');
});


// script.js
window.addEventListener('load', function() {
  const welcomeAnimation = document.querySelector('.welcome-animation');
  welcomeAnimation.style.animation = 'none'; // Reset animation
  welcomeAnimation.offsetHeight; // Trigger a reflow
  welcomeAnimation.style.animation = null; // Re-enable animation

  // Add an event listener to remove the element when the animation ends
  welcomeAnimation.addEventListener('animationend', function() {
    welcomeAnimation.remove();
  });
});
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
}
window.addEventListener('load', scrollToTop);


