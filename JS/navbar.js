  // Functie om de tekstkleur van de navigatie-items te wijzigen
  function changeNavTextColor() {
    // Haal de huidige pagina-URL op
    var currentPageUrl = window.location.href;
    // Haal alle navigatie-items op
    var navItems = document.querySelectorAll('#navbar ul li');
    // Loop door elk navigatie-item
    navItems.forEach(function(item) {
        // Controleer of de huidige pagina-URL deel uitmaakt van de href van het navigatie-item
        if (currentPageUrl.includes(item.querySelector('a').href)) {
            // Voeg de klasse 'green' toe aan het navigatie-item als de URL overeenkomt
            item.querySelector('a').classList.add('green');
        } else {
            // Verwijder de klasse 'green' van het navigatie-item als de URL niet overeenkomt
            item.querySelector('a').classList.remove('green');
        }
    });
}

// Roep de functie aan bij het laden van de pagina
window.onload = changeNavTextColor;