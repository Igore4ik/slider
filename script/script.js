const slides = document.querySelectorAll('.slide'),
    nextBtn = document.querySelector('#next'),
    prevBtn = document.querySelector('#prev'),
    // auto = false,
    auto = true,
    timeInterval = 5000;
let slideInterval;


const nextSlider = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current')
    } else {
        slides[0].classList.add('current');
    }
}
const prevSlider = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current')
    } else {
        slides[slides.length - 1].classList.add('current');
    }
}

nextBtn.addEventListener('click', () => {
    nextSlider();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlider, timeInterval);
    }
})
prevBtn.addEventListener('click', () => {
    prevSlider();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlider, timeInterval);
    }
})

if (auto) {
    slideInterval = setInterval(nextSlider, timeInterval);
}






























