let yourScreenHeight = window.innerHeight;
let yourScreenWidth = window.innerWidth;
const yourVideo = document.getElementById("video");
const photoReplaceVideo = document.getElementById("photo-replace");
const centerDiv = document.querySelector(".center-text");

//Adjusting the video to have the same height as the user browser
yourVideo.style.height = yourScreenHeight + "px";
yourVideo.style.width = yourScreenWidth + "px";

centerDiv.style.height = yourScreenHeight / 1.9 + "px";

//Mobile
if (yourScreenWidth < 600) {
  yourVideo.remove()
  photoReplaceVideo.style.height = yourScreenHeight + "px";
  photoReplaceVideo.style.width = "1000px";
  photoReplaceVideo.style.marginLeft = "-400px";
  photoReplaceVideo.style.display = "block";
}

// Slider
var swiper = new Swiper(".swiper-container", {
  autoplay: true,
  speed: 400,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
