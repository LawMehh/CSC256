
const images = [
    'cavediving.jpg',
    'lakehouse.jpg',
    'traditionalhouse.jpg',
    'waterfalls.jpg'
];

let currentIndex = 0;
const slideshow = document.getElementById('slideshow');
const slides = slideshow.getElementsByTagName('img');

function showNextImage() {
    // Remove the active class from the current image
    slides[currentIndex].classList.remove('active');

    // Update the index to the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Add the active class to the next image
    slides[currentIndex].classList.add('active');
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);