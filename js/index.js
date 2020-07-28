let yourScreenHeight = window.innerHeight;
let yourScreenWidth = window.innerWidth;
const yourVideo = document.getElementById('video');
const centerDiv = document.querySelector('.center-text');

//Adjusting the video to have the same height as the user browser
yourVideo.style.height = yourScreenHeight + 'px';
yourVideo.style.width = yourScreenWidth + 'px';

centerDiv.style.height = yourScreenHeight / 1.9 + 'px';