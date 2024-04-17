// Open het modal en toon de afbeelding
function openModal(imgSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imgSrc;

    // Voeg een event listener toe om het modal te sluiten als er op de overlay wordt geklikt
    modal.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
}

// Sluit het modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}