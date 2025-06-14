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










