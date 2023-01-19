const buttonNext = document.querySelector("[data-carousel-button-next]");
const buttonPrevious = document.querySelector("[data-carousel-button-previous]");
const carousel = document.querySelector("[data-carousel]");
const slidesContainer = document.querySelector("[data-carousel-slides-container]");

let currentSlide = 0;

const numberOfSLides = slidesContainer.children.length;

function handleNextSlide() {
    currentSlide = modulo(currentSlide + 1, numberOfSLides);
    carousel.style.setProperty("--current-slide", currentSlide);
}

function handlePreviousSlide() {
    currentSlide = modulo(currentSlide - 1, numberOfSLides)
    carousel.style.setProperty("--current-slide", currentSlide);
}

function modulo(number, rest){
    let result = number % rest;
    if (result < 0) {
        result += rest;
    }
    return result;
}

buttonNext.addEventListener("click", handleNextSlide);
buttonPrevious.addEventListener("click", handlePreviousSlide);


/* const next = document.getElementById("next");
const prev = document.getElementById("prev");
const index = 0;

next.addEventListener("click", () => {
    show_image(1);
});

prev.addEventListener("click", () => {
    show_image(-1);
});

show_image(index);


function show_image(i) {
    index += i;
    let images = document.querySelectorAll(".image");
    let dots = document.querySelectorAll(".dot");

    for (i = 0; i < images.length; i++)
        images[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace("active", "");

    if (index > images.length - 1)
        index = 0;

    if (index < 0)
        index = images.length - 1;

    images[index].style.display = "block";
    dots[index].className += "active";
} */