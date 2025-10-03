let adsBtns = document.querySelectorAll(".ads-btn");
let adsCards = document.querySelectorAll(".item");
let allBtn = adsBtns[0];

allBtn.classList.add("active"); 

adsBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        // get data-category of buttons
        let category = btn.getAttribute("data-category");

        // On Click on any button
        adsBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Loop on adsCards
        adsCards.forEach(card =>{
            if (category === "all" || card.getAttribute("data-category") === category) {
                card.style.display = "flex"; 
                card.classList.add("animate__animated", "animate__fadeIn");
            } else {
                card.style.display = "none"; 
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".item, .skills-container, .case-study, .ads-buttons");

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








