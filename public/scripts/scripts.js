// Insert document into div
$.get('/about', function(Data) {
    document.getElementById('content').innerHTML = Data;
});
$("a#id_about").click(function() {
    $.get('/about', function(Data) {
        document.getElementById('content').innerHTML = Data;
    });
    $(this).css("background-color", "greenyellow");
    $("a#id_players").css("background-color", "white");
});
$("a#id_players").click(function() {
    $.get('/players', function(Data) {
        document.getElementById('content').innerHTML = Data;
    });
    $(this).css("background-color", "greenyellow");
    $("a#id_about").css("background-color", "white");
});

// Click to scroll
$("div#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".info").offset().top      
    }, 'slow');
});

//Fancybox settings
$('[data-fancybox="image"]').fancybox({
    animationEffect: "fade",
    buttons: [
        //"zoom",
        //"close"
    ], 
});
