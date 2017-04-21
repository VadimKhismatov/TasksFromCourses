'use strict;'

$(function() {

    //Находим кнопку проверки результатов
    //А так же поле куда будут выведены результаты теста
    const btn = document.getElementById('btn');
    const result_field = document.getElementById('result_field');

    const reset_btn = document.getElementById('reset_btn');
    const reset_cross = document.getElementById('reset_cross');

    //console.log('btn:', btn);

    btn.addEventListener('click', ckeckAnswers);
    reset_btn.addEventListener('click', resetForm);
    reset_cross.addEventListener('click', resetForm);

    //Получаем массив правильных ответов из localStorage
    let rightAnswers = JSON.parse(localStorage.getItem('rightAnswers'));
    const total = 5;  //общее количество правильных ответов


    //Функция проверки результатов
    function ckeckAnswers() {
        //console.log("ckeckAnswers work");

        let userAnswers = []; //массив для хранения ответов пользователя
        let count = 0;  //количество правильных ответов пользователя

        for (let i = 1; i < 6; i++) {   //с помощью цикла собираем ответы пользователя и записываем в массив
            userAnswers[i - 1] = document.forms['quizeForm']['q' + i].value;
        };

        for (let i = 0; i < total; i++) {   // этот цикл сравнивает результаты ответов пользователя с правильными ответами

            if (userAnswers[i] === rightAnswers[i]) { // если они равны счетчик увеличивается
                count++;
            }
        };

        //console.log("rightAnswers: ", rightAnswers);
        //console.log("userAnswers: ", userAnswers);

        //console.log("count: ", count);

        if (count >= 3) {//если счетчик больше или равен 3 то тест считается пройденным, в поле записывается соответствующее сообщение

            result_field.innerHTML = `Вы правильно ответили на ${count} из 5 вопросов. <strong>Тест пройден!</strong>`;

        } else {    //если нет то выводится сообщение о не прохождении теста

            result_field.innerHTML = `Вы правильно ответили на ${count} из 5 вопросов. <strong>Тест не пройден!</strong>`;

        }

    };

    //функция сброса радио баттонов после  просмотра результатов теста
    function resetForm() {
        $('input:radio').prop('checked', false);
    };
});


