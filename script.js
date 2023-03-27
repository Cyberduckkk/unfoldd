var menu = document.getElementById("menu");
menu.onclick = function(){
    menu.classList.toggle("openmenu")
}

jQuery(document).ready(function( $ ){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

