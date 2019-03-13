// Insert document into div
$.get('/info', function(Data) {
    document.getElementById('text').innerHTML = Data;
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