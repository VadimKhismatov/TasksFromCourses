//function for first task with tabs

$(function () {

    var $links = $(".tabs_menu_link");
    var $tabs_content = $('#content-1, #content-2, #content-3');

    console.log($tabs_content);

    //default

    $($links).each(function () {

        if ($(this).attr('id') === "first_link") {

            $(this).addClass('active');

            $("#content-1").addClass("show");

        }
    });

    $links.on('click', function (e) {


        if ($(this).attr('id') === 'first_link') {

            $links.removeClass('active');
            $(this).addClass('active');

            $tabs_content.removeClass('show');
            $("#content-1").addClass("show");


        } else if ($(this).attr('id') === 'second_link') {

            $links.removeClass('active');
            $(this).addClass('active');

            $tabs_content.removeClass('show');
            $("#content-2").addClass("show");


        } else if ($(this).attr('id') === 'third_link') {

            $links.removeClass('active');
            $(this).addClass('active');

            $tabs_content.removeClass('show');
            $("#content-3").addClass("show");
            ;

        }
    });
});

//function for second task with form

$(function () {
    var $inputs = $('[data-title="input-field"]');
    console.log($inputs);

    var $btn = $('#btn');

    var $tips = $('.tips');
    console.log($tips);

    $tips.each(function () {
        $(this).fadeOut();
    });

    $inputs.each(function (i) {
        console.log($(this));


        $(this).hover(function (e) {

            console.log($(this).attr('id'));

            if ($(this).attr('id') === 'firstname') {

                $('#first_tip').fadeToggle();

            } else if ($(this).attr('id') === 'lastname') {

                $('#second_tip').fadeToggle();

            } else if ($(this).attr('id') === 'address') {

                $('#third_tip').fadeToggle();

            }
        });
    });

    $btn.on('click', function () {
        $tips.each(function () {
            $(this).toggle();
        });
    });

});