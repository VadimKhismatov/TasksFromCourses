document.addEventListener("DOMContentLoaded", function () {
    var firstToDoList = [
        {
            id: 1,
            text: 'learn javascript'
        },
        {
            id: 2,
            text: 'repeat HTML'
        },
        {
            id: 3,
            text: 'repeat CSS'
        }
    ];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
});