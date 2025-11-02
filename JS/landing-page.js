// The slider part
const slidesContainer = document.querySelector(".slides");
const allSlides = document.querySelectorAll(".slides img");
let currentIndex = 0;

function slidesPerView() {
  return window.innerWidth <= 768 ? 1 : 3;
}

setInterval(() => {
  const perView = slidesPerView();
  const maxIndex = Math.ceil(allSlides.length / perView) - 1;

  currentIndex = (currentIndex + 1) % (maxIndex + 1);
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 6000);

// Animation for all elements part
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".nav, .text, .main-logo, .about-us, .our-service, .card, .clients, .logos-slide, .reviews, .slides, .whatsapp-float, .faq, .title, .faq-item");

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));
});

// The FAQ part
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.querySelector('h3').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

const hamburger = document.getElementById("hamburger"); 
const links = document.querySelector("nav .links"); 

hamburger.addEventListener("click", (e) => {
  links.classList.toggle("active"); 
  e.stopPropagation(); 
});

document.addEventListener("click", (e) => {
  if (links.classList.contains("active") && !links.contains(e.target) && e.target !== hamburger) {
    links.classList.remove("active"); 
  }
});
