//Массив объектов, в который записаны вопросы и ответы для теста, а так же массив с правильными ответами.
const quize = [
    {

        question: "1. Что значит сокращение ES ?",
        answers: {
            a: "a. EcmaScript",
            b: "b. EssentialScript",
            c: "c. Не знаю.",
        },
        rightAnswer: "a"

    },
    {

        question: "2. Зачем используется ключевое слово var ?",
        answers: {
            a: "a. Для вывода результатов программы на экран",
            b: "b. Для выполнения написанного выше кода",
            c: "c. Для создания новой переменной",
        },
        rightAnswer: "c"

    },
    {

        question: "3. Какого типа данных нет в javascript ?",
        answers: {
            a: "a. Array",
            b: "b. String",
            c: "c. Decimal",
        },
        rightAnswer: "c"

    },
    {

        question: "4. Обозначение версии javascript ES-2015 означает ?",
        answers: {
            a: "a. Версию ES5",
            b: "b. Версию ES6",
            c: "c. Версию ES7",
        },
        rightAnswer: "b"

    },
    {

        question: "5. Для чего нужен \"use strict\" ?",
        answers: {
            a: "a. Соответствие современному стандарту",
            b: "b. Строгая проверка на синтаксические ошибки",
            c: "c. Не знаю.",
        },
        rightAnswer: "a"

    },
];

const rightAnswers = ["a", "c", "c", "b", "a"];


//Запись объекта с тестом в localStorage
//console.log(quize);

localStorage.setItem('quize', JSON.stringify(quize));
localStorage.setItem('rightAnswers', JSON.stringify(rightAnswers));


