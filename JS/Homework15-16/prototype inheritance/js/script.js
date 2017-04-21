window.onload = function () {

    var human = {
        name: "Vadim",
        age: 25,
        gender: "male",
        weight: 82,
        height: 181
    };

    function Worker(work_place, salary) {
        this.work_place = work_place;
        this.salary = salary + " $";
    };

    Worker.prototype = human;

    Worker.prototype.go_work = function () {
        console.log("Time to go on work");
    };

    var worker = new Worker("Kiev", 200);
    console.log("worker", worker);

    function Student(place_of_study, scholarship) {
        this.place_of_study = place_of_study;
        this.scholarship = scholarship + " $";
    };

    Student.prototype = human;
    Student.prototype.watch_tv_series = function () {
        console.log("Time to watch The Big Bang Theory!");
    };

    var student = new Student("Volodymyr Dahl East Ukrainian National University", 30);
    console.log("student", student);


};