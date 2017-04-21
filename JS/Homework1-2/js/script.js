
window.onload = function () {

    //exect

    first();
    second();

    //First exercise

    function first() {

        var base = prompt("Enter a base number");
        var degree = prompt("Enter a degree number");;

        console.log("Your numbers is " + base + " and " + degree);

        function pow(base, degree) {

            var result = 1;

            for (var i = 1; i <= degree; i++) {

                result *= base;

            }

            console.log(result);
        }

        if (base && degree) {

            pow(base, degree);

        } else {

            console.log("Refresh your page and enter a numbers");

        }

    }
    //Second exercise

    function second() {

        var userNames = [];
        var auth = false;

        for (var i = 0; i < 5; i++) {

            var name = prompt("Enter a names");

            userNames.push(name);

        }

        console.log(userNames);


        var searchName = prompt("Enter a name to seach");
        console.log("Your search name " + searchName);


        for (var j = 0; j < userNames.length; j++) {

            var tmpName = userNames[j];

            if (searchName.toLowerCase() == tmpName.toLowerCase()) {
                auth = true;

            }
        }

        if (auth) {

            alert(searchName + " you entered");
        } else {

            alert("There is no such name");

        }

    }
}