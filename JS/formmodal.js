// Functie om modaal venster te openen
function openModal(title, price) {
    var modal = document.getElementById('myModal');
    var eventTitle = document.getElementById('eventTitle');
    var eventPrice = document.getElementById('eventPrice');
    eventTitle.textContent = title;
    eventPrice.textContent = 'Prijs: € ' + price;
    modal.style.display = "block";
}

// Functie om modaal venster te sluiten
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}