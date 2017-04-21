'use strict;'
//Считываем объект с тестом из localStorage, и передаем его в шаблонизатор.


$(function () {

    var quize = JSON.parse(localStorage.getItem('quize'));
    //console.log(test);

    var html = $("#test").html();

    var content = tmpl(html, {
        data: quize
    });

    $('body').prepend(content);

});