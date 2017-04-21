
//Считываем объект с тестом из localStorage, и передаем его в шаблонизатор.


$(function() {

    const quize = JSON.parse(localStorage.getItem('quize'));
    //console.log("quize", quize);

    const html = $("#test").html();

    const content = tmpl(html, {
        data: quize
    });

    $('body').prepend(content);

});