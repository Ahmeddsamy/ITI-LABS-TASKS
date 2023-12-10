"use strict";
let currentPhoto = 0;
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
    console.log(images);
    showSlide(currentPhoto);
  }
};

function showSlide(index) {
  const image = images[index];
  document.getElementById("slider-image").src = image.url;
  document.getElementById("slider-text").textContent = image.title;
}

function startSlider() {
  sliderInterval = setInterval(() => {
    currentPhoto = (currentPhoto + 1) % images.length;
    showSlide(currentPhoto);
  }, 2000);
}

function stopSlider() {
  clearInterval(sliderInterval);
}

function nextSlide() {
  currentPhoto = (currentPhoto + 1) % images.length;
  showSlide(currentPhoto);
}

function prevSlide() {
  currentPhoto = (currentPhoto - 1 + images.length) % images.length;
  showSlide(currentPhoto);
}
