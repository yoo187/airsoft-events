$(document).ready(function() {
    $('.dropdown-trigger').click(function() {
        $(this).next('.dropdown-content').slideToggle();
    });
});
