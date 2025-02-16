const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
let index = 0;

document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}