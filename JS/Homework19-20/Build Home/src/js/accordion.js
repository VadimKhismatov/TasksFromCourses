$(function () {


    $(".accordion .accordion__title").click(function () {

        $(this).toggleClass("accordion__title--active")

        $(this).children(".accordion__img").toggleClass("accordion__img--active");

        $(this).next(".accordion .accordion__text").slideToggle();

    });
});