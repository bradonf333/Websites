$(document).ready(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    // Bootstrap ScrollSpy
    $('body').scrollspy({
        target: '.navbar'
    })


});