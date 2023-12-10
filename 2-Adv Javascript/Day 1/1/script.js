"use strict";
let currentIndex = 0;
let images = [];
let sliderInterval;

// Fetch slider images using XMLHttpRequest
const serverPhotos = new XMLHttpRequest();
serverPhotos.open(
  "GET",
  "https://jsonplaceholder.typicode.com/albums/1/photos"
);
serverPhotos.send();

serverPhotos.onreadystatechange = function () {
  if (serverPhotos.readyState === 4 && serverPhotos.status === 200) {
    images = JSON.parse(serverPhotos.responseText);
    showSlide(currentIndex);
  }
};

function showSlide(index) {
  const image = images[index];
  document.getElementById("slider-image").src = image.url;
  document.getElementById("slider-text").textContent = image.title;
}

function startSlider() {
  stopSlider(); // Stop previous interval if exists
  sliderInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }, 2000); // Change slide every 2 seconds (adjust as needed)
}

function stopSlider() {
  clearInterval(sliderInterval);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}
