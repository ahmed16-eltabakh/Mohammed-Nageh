let firstImg = document.querySelector(".first-img");
let next = document.querySelector(".fa-circle-right");
let prev = document.querySelector(".fa-circle-left");
let dotsContainer = document.querySelector(".dots-container");
let currentIndex = 0;

let imgs = [
    "../imgs/case-studies/case-study-2/case-study-2 (1).jpg",
];

if (imgs.length === 1){
    next.style.display = "none"
    prev.style.display = "none"
}

imgs.forEach((_, index) =>{
    let dot = document.createElement('span');
    dot.classList.add("dot");

    if(index === 0) dot.classList.add("active");
    dot.addEventListener("click", ()=>{
        currentIndex = index;
        updateSlider();
    });

    dotsContainer.appendChild(dot);
});


function updateSlider(){
    firstImg.src = imgs[currentIndex];

    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i)=>{
        dot.classList.toggle('active', i === currentIndex);
    });
};

next.addEventListener("click", ()=>{
    currentIndex = (currentIndex + 1) % imgs.length;
    updateSlider();
});

prev.addEventListener("click", ()=>{
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    updateSlider();
});


let touchStartX = 0;
let touchEndX = 0;

firstImg.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

firstImg.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    let swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > 50) { 
        if (swipeDistance < 0) {
            currentIndex = (currentIndex + 1) % imgs.length;
        } else {
            currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
        }
        updateSlider();
    };
};
