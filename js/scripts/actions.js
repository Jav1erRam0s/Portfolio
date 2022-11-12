
// Resta el header al momento de posicionarse sobre la seccion.
var navOffset = $('.navbar').height() + 16;

$('.navbar li a').click(function(event) {
    var href = $(this).attr('href');

    // Don't let the browser scroll, but still update the current address
    // in the browser.
    event.preventDefault();
    window.location.hash = href;

    // Explicitly scroll to where the browser thinks the element
    // is, but apply the offset.
    $(href)[0].scrollIntoView();
    window.scrollBy(0, -navOffset);
});

// Cierra el navbar en aplicaciones mobiles
$(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});


// Cambia el texto del boton de proyectos
const ChangeTextBtn = () => {
    const element = document.getElementById("btn-show");
    if (element.innerHTML=="Show more") { element.innerHTML="Show less"; }
    else { element.innerHTML="Show more"; }
}


// Activacion de tooltip
$('document').ready(function(){
    $('[data-toggle=tooltip]').tooltip();
});    