'use strict;'

$(function () {

    //Находим кнопку проверки результатов
    //А так же поле куда будут выведены результаты теста
    var btn = document.getElementById('btn');
    var result_field = document.getElementById('result_field');

    var reset_btn = document.getElementById('reset_btn');
    var reset_cross = document.getElementById('reset_cross');

    //console.log('btn:', btn);

    btn.addEventListener('click', ckeckAnswers);
    reset_btn.addEventListener('click', resetForm);
    reset_cross.addEventListener('click', resetForm);
    //Получаем массив правильных ответов из localStorage
    var rightAnswers = JSON.parse(localStorage.getItem('rightAnswers'));
    var total = 5;  //общее количество правильных ответов
    var count = 0;  //количество правильных ответов пользователя

    //Функция проверки результатов
    function ckeckAnswers() {
        //console.log("ckeckAnswers work");

        var userAnswers = []; //массив для хранения ответов пользователя

        for (var i = 1; i < 6; i++) {   //с помощью цикла собираем ответы пользователя и записываем в массив
            userAnswers[i - 1] = document.forms['quizeForm']['q' + i].value;
        };

        for (var i = 0; i < total; i++) {   // этот цикл сравнивает результаты ответов пользователя с правильными ответами

            if (userAnswers[i] === rightAnswers[i]) { // если они равны счетчик увеличивается
                count++;
            }
        };

        //console.log("rightAnswers: ", rightAnswers);
        //console.log("userAnswers: ", userAnswers);

        //console.log("count: ", count);

        if (count >= 3) {//если счетчик больше или равен 3 то тест считается пройденным, в поле записывается соответствующее сообщение

            result_field.innerHTML = "Вы правильно ответили на " + count + " из 5 вопросов. <strong>Тест пройден!</strong>";

        } else {    //если нет то выводится сообщение о не прохождении теста

            result_field.innerHTML = "Вы правильно ответили на " + count + " из 5 вопросов. <strong>Тест не пройден!</strong>";

        }

    };

    //функция сброса радио баттонов после  просмотра результатов теста
    function resetForm() {
        $('input:radio').prop('checked', false);
    };
});


