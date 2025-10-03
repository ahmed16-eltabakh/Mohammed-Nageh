document.getElementById("menu-icon").addEventListener("click", function () {
    document.getElementById("menu-items").classList.toggle("active");
});


function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src; 
    captionText.innerHTML = img.alt; 
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("header, .img-box");

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
















