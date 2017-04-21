$(function () {
    $('.menu li').hover(function () {
        $(this).children('ul').stop(false, true).slideDown(500);
    }, function () {
        $(this).children('ul').stop(false, true).slideUp(500);
    });
});