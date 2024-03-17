$(function () {});
window.onload = function () {
  var video = document.getElementById("heroVideo");
  video.removeAttribute("controls");

  video.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      video.removeAttribute("poster"); // Remove poster once video starts playing
    } else {
      video.pause();
    }
  });
};

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");

  navbarToggler.addEventListener("click", function () {
    document.body.classList.toggle("menu-opened");
  });
});
