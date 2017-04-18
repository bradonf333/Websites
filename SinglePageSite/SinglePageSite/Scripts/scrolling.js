$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 900
    });

    // Smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 140
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Initialize WOW for element animation
    new WOW().init();

});