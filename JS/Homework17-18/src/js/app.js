
$(function () {

    var form = document.querySelector('#searchForm');
    var searchBtn = document.querySelector("#searchBtn");

    form.addEventListener('keydown', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            $("#form_wrapper").removeClass('form_wrapper_center');
            //console.log(e.keyCode);
            GoogleSearch();
        }
    });

    searchBtn.addEventListener("click", function (e) {
        e.preventDefault();

        $("#form_wrapper").removeClass('form_wrapper_center');
        GoogleSearch();
    });


});

function GoogleSearch() {

    var searchQuery = document.querySelector("#searchQuery").value;
    //console.log("searchQuery", searchQuery);

    if (searchQuery.length > 0) {
        searchQuery = encodeURIComponent(searchQuery);
    } else {
        return
    }

    var request = new XMLHttpRequest();

    request.open('GET', 'https://www.googleapis.com/customsearch/v1?key=AIzaSyD_yotJt04CJfQ4Ibc7wG7uMLP5fEy_zfY&cx=016795527241021289695:jljvvlrwqde&q=' + searchQuery);

    request.onreadystatechange = function () {

        if (request.readyState == 4) {
            if (request.status == 200) {

                var data = JSON.parse(request.responseText);
                //console.log("data from request", data.items);

                var html = $("#test").html();

                var content = tmpl(html, {
                    data: data.items
                });
                $('#show_results').html('');
                $('#show_results').prepend(content);
            }
        }
    };

    request.send();


};
