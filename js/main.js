'use strict';
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto =false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // todo Get current class
  const current = document.querySelector('.current');
  // todo Remove current class
  current.classList.remove('current');
  // todo Check for next slide
  if(current.nextElementSibling) {
    // todo Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else{
    // todo Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // todo Get current class
  const current = document.querySelector('.current');
  // todo Remove current class
  current.classList.remove('current');
  // todo Check for prev slide
  if(current.previousElementSibling) {
    // todo Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else{
    // todo Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// ! Button events
next.addEventListener('click', (e) => {
  nextSlide();
});

prev.addEventListener('click', (e) => {
  prevSlide();
});

