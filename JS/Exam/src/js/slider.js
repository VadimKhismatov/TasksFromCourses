function Slider() {

    var slider = document.querySelector("#article").childNodes[2].nextSibling;
    //var slider = document.querySelector("#slider");
    console.log("slider", slider);

    var currentWidth = getComputedStyle(slider).width;
    currentWidth = parseInt(currentWidth.slice(0, currentWidth.indexOf("px")));
    console.log("width", width);
    var width = 0;
    var nextBtn = document.querySelector("#next");
    var backBtn = document.querySelector("#back");
    var slidesContainer = slider.childNodes[0].nextSibling;
    console.log("slidesContainer", slidesContainer);
    var slides = slidesContainer.querySelectorAll(".about__article__slide");
    console.log("slides", slides);
    var lastSlide = slides.length - 1;
    var currentSlide = 1;

    function nextSlide() {
        if (currentSlide === slides.length) {
            slidesContainer.style.marginLeft = "0px";
            currentSlide = 1;
            width = currentWidth;
        } else {
            slidesContainer.style.marginLeft = "-" + width + "px";
            width += width;
            currentSlide++;
        }
        //console.log("next function work");
    };

    function backSlide() {
        if (currentSlide === 1) {
            slidesContainer.style.marginLeft = "-" + 300 * lastSlide + "px";
            currentSlide = slides.length;
            width = 300 * lastSlide;
        } else {
            width -= 300;
            slidesContainer.style.marginLeft = "-" + width + "px";
            currentSlide--;
        }
        //console.log("back function work");
    };

    nextBtn.addEventListener("click", nextSlide);
    backBtn.addEventListener("click", backSlide);

};
