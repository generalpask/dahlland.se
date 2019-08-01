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

//Server status
MinecraftAPI.getServerStatus('minecraft.dahlland.se', function (err, status) {
    if (err) {
        return document.querySelector('.server-status').innerHTML = 'Error loading status';
    }

    document.querySelector('.server-online').innerHTML = status.online ? 'Online' : 'Offline';
    document.querySelector('.status-indicator').style.backgroundColor = status.online ? '#00ff00' : '#ff0000';

    $(".playersnow").html(status.players.now);
    $(".playersmax").html(status.players.max);

    var now = new Date().getTime();
    var lastUpdated = status.last_updated;
    var lastUpdatedDate = new Date(lastUpdated*1000);
    var timeFromLastUpdatedDate = now - lastUpdatedDate;
    var minutes = Math.floor((timeFromLastUpdatedDate % (1000 * 60 * 60)) / (1000 * 60));

    $(".lastupdated").html(minutes);
});
