// JavaScript to handle the rotating banner
let currentIndex = 0;
const banners = document.querySelectorAll('.banner-img');

function changeBanner() {
    banners[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % banners.length;
    banners[currentIndex].classList.add('active');
}

// Set the first banner as active initially
banners[currentIndex].classList.add('active');

// Change the banner every 10 seconds
setInterval(changeBanner, 10000);
