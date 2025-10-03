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


















