const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click" , () => 
nav.classList.toggle("active"));


const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

let counter = 1;
const size = carouselImages[0].clientWidth;

function nextSlide() {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.3s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

function prevSlide() {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.3s ease-in-out";
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Botões de controle do carrossel
const nextButton = document.createElement("button");
nextButton.innerHTML = "Next";
nextButton.addEventListener("click", nextSlide);

const prevButton = document.createElement("button");
prevButton.innerHTML = "Prev";
prevButton.addEventListener("click", prevSlide);

document.body.appendChild(prevButton);
document.body.appendChild(nextButton);



