window.onload = function () {

    //данные элементы вынесени в глобальный скоуп для того чтобы использовать их в методах объекта
    //создаем wrapper и добавляем его в body

    var wrapper = document.createElement("section");
    wrapper.classList.add("wrapper");
    wrapper.setAttribute("id", "wrapper");
    document.body.insertBefore(wrapper, document.body.childNodes[0]);


    //создаем container и добавляем его в wrapper
    var container = document.createElement("section");
    container.classList.add("container");
    wrapper.appendChild(container);


    var questions = {
        header: function () { //метод header создает header и добавляет в него заголовок h1

            var header = document.createElement("header");
            header.classList.add("row", "header");
            var h1 = "<h1 class=\"col-lg-12 topic\">Тест по программированию</h1>";
            header.innerHTML = h1;
            container.appendChild(header);

        },
        questions: function () { //метод questions создает контейнер для вопросов и формирует сами вопросы и вариантов ответов

            var questionsContainer = document.createElement("section");
            questionsContainer.classList.add("row", "questions_container");
            container.appendChild(questionsContainer);

            //данный циел формирует секцию для фопроса и его вариантов ответа
            for (var i = 1; i <= 3; i++) {

                var question = document.createElement("section");
                question.classList.add("col-lg-12", "question");
                questionsContainer.appendChild(question);

                question.innerHTML = "<h3 class=\"question_topic\">" + i + ". Вопрос №" + i + "</h3>";



                for (var j = 1; j <= 3 ; j++) {

                    var p = document.createElement("p");
                    p.classList.add("question_checkbox_box");
                    question.appendChild(p);

                    var label = document.createElement("label");
                    label.classList.add("question_checkbox_label");
                    p.appendChild(label);


                    label.innerHTML = "<input id=\"first_checkbox\" class=\"question_checkbox\" type=\"checkbox\" />Вариант ответа №" + j + "";
                }

            }

        },
        button: function () {
            var section = document.createElement("section");
            section.classList.add("row", "btn_container");
            container.appendChild(section);

            var button = "<button class=\"btn btn-primary btn-lg\">Проверить мои результаты</button>";
            section.innerHTML = button;
        }
    };

    questions.header();
    questions.questions();
    questions.button();
};
