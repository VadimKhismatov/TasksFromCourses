
var app = {
    start: function () {

        var base = prompt("Enter a base number");
        var degree = prompt("Enter a degree number");;
        if (base && degree) {

            app.pow(base, degree);

        } else {

            console.log("Refresh your page and enter a numbers");

        }
    },

    pow: function (base, degree) {

        var result = 1;

        for (var i = 1; i <= degree; i++) {

            result *= base;

        }

        console.log(result);
        return result

    }
};

try {
    module.exports = app;
} catch (e) { }
