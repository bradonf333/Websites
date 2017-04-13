$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    // add Bootstrap's scrollspy

    $('body').scrollspy({
        target: '.navbar',
        offset: 900
    });

    /*
    $('#content').scrollspy({
        offset: 450
    });
    */

    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 140
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

});