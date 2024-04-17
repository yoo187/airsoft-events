document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(form);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'contact-form.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    alert('Uw bericht is succesvol verzonden. We nemen zo spoedig mogelijk contact met u op.');
                    form.reset();
                } else {
                    alert('Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.');
                }
            }
        };

        xhr.send(new URLSearchParams(formData).toString());
    });
});
