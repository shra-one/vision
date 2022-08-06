$(function () {
  AOS.init();

  $(".js-counter").countUp({
    time: 2000,
    delay: 10,
  });

 //countdown
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();
  var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    if (days > 0) document.getElementById("days").innerHTML = days;
    else document.getElementById("days").innerHTML = 0;
    if (hours > 0) document.getElementById("hours").innerHTML = hours;
    else document.getElementById("hours").innerHTML = 0;
    if (minutes > 0) document.getElementById("minutes").innerHTML = minutes;
    else document.getElementById("minutes").innerHTML = 0;
    if (seconds > 0) document.getElementById("seconds").innerHTML = seconds;
    else document.getElementById("seconds").innerHTML = 0;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);


  $(".js-testimonials").slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
    prevArrow: `<svg class="testimonial-slick-left" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6586 7.2475C19.243 6.88378 18.6112 6.92584 18.2475 7.34144L11.2475 15.34C10.9175 15.717 10.9175 16.2799 11.2473 16.657L18.2473 24.6584C18.611 25.0741 19.2428 25.1163 19.6584 24.7526C20.0741 24.389 20.1163 23.7572 19.7526 23.3416L13.3288 15.9987L19.7525 8.65859C20.1162 8.24298 20.0742 7.61122 19.6586 7.2475Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2ZM32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z" fill="black"/>
      </svg>
      `,
      nextArrow: `<svg class="testimonial-slick-right" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3414 7.2475C13.757 6.88378 14.3888 6.92584 14.7525 7.34144L21.7525 15.34C22.0825 15.717 22.0825 16.2799 21.7527 16.657L14.7527 24.6584C14.389 25.0741 13.7572 25.1163 13.3416 24.7526C12.9259 24.389 12.8837 23.7572 13.2474 23.3416L19.6712 15.9987L13.2475 8.65859C12.8838 8.24298 12.9258 7.61122 13.3414 7.2475Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2ZM0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="black"/>
      </svg>
      `,
    // adaptiveHeight: true,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10",
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "10",
        },
      },
    ],
  });

 
  $('#hero-carousel').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    variableWidth: false,
    autoplay: false,
    adaptiveHeight: false,
    speed: 900,
    autoplaySpeed: 700,
    prevArrow: `<svg class="hero-slick-left" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6586 7.2475C19.243 6.88378 18.6112 6.92584 18.2475 7.34144L11.2475 15.34C10.9175 15.717 10.9175 16.2799 11.2473 16.657L18.2473 24.6584C18.611 25.0741 19.2428 25.1163 19.6584 24.7526C20.0741 24.389 20.1163 23.7572 19.7526 23.3416L13.3288 15.9987L19.7525 8.65859C20.1162 8.24298 20.0742 7.61122 19.6586 7.2475Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2ZM32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z" fill="white"/>
    </svg>
    `,
    nextArrow: `<svg class="hero-slick-right" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3414 7.2475C13.757 6.88378 14.3888 6.92584 14.7525 7.34144L21.7525 15.34C22.0825 15.717 22.0825 16.2799 21.7527 16.657L14.7527 24.6584C14.389 25.0741 13.7572 25.1163 13.3416 24.7526C12.9259 24.389 12.8837 23.7572 13.2474 23.3416L19.6712 15.9987L13.2475 8.65859C12.8838 8.24298 12.9258 7.61122 13.3414 7.2475Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2ZM0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white"/>
    </svg>
    `
    });

    $('#event-carousel').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      centerMode: false,
      variableWidth: false,
      autoplay: false,
      adaptiveHeight: false,
      speed: 900,
      autoplaySpeed: 700,
      appendArrows:$('#event-arrows'),
      prevArrow: `<svg class="event-slick-left" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6586 7.2475C19.243 6.88378 18.6112 6.92584 18.2475 7.34144L11.2475 15.34C10.9175 15.717 10.9175 16.2799 11.2473 16.657L18.2473 24.6584C18.611 25.0741 19.2428 25.1163 19.6584 24.7526C20.0741 24.389 20.1163 23.7572 19.7526 23.3416L13.3288 15.9987L19.7525 8.65859C20.1162 8.24298 20.0742 7.61122 19.6586 7.2475Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2ZM32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z" fill="white"/>
      </svg>
      `,
      nextArrow: `<svg class="event-slick-right" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3414 7.2475C13.757 6.88378 14.3888 6.92584 14.7525 7.34144L21.7525 15.34C22.0825 15.717 22.0825 16.2799 21.7527 16.657L14.7527 24.6584C14.389 25.0741 13.7572 25.1163 13.3416 24.7526C12.9259 24.389 12.8837 23.7572 13.2474 23.3416L19.6712 15.9987L13.2475 8.65859C12.8838 8.24298 12.9258 7.61122 13.3414 7.2475Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2ZM0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white"/>
      </svg>
      `
      });
  AOS.refresh();
function eventFn(){
  var dateHeight=$('.date-container ').outerHeight();
  var calendarHeight=$('.calendar-wrapper ').outerHeight();
 
  $("body").get(0).style.setProperty("--eventHeight", dateHeight+calendarHeight+'px');
}
eventFn();
$(window).resize(function(){
  eventFn();
})
  
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})