//setInterval
//animate margin-left
//if it's last slide, go to position 1(0px);
//listen for mouseenter and pause
//resume on mouseleave

(function ($) {
    $.fn.autoSlider = function () {

        var width = 720;
        var animationSpeed = 1000;
        var pause = 3000;

        //cache DOM

        var $slider = $('#slider');
        var $slideContainer = $slider.find('.slides');
        var $slides = $slideContainer.find('.slide');
        var currentSlide = 1;
        var interval;

        function startSlider() {
            interval = setInterval(function () {
                $slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function () {
                    currentSlide++;
                    if (currentSlide === $slides.length) {
                        currentSlide = 1;
                        $slideContainer.css('margin-left', 0);
                    }
                });
            }, pause);
        };

        function pauseSlider() {
            clearInterval(interval);
        };

        $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
        startSlider();
    };
})(jQuery);