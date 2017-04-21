var gulp = require("gulp");
var sass = require("gulp-sass");
var imagemin = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');
var concat = require("gulp-concat");
var minify_css = require("gulp-clean-css");
var uglify = require('gulp-uglifyjs');
var clean = require("gulp-clean");
var babel = require('gulp-babel');

//gather all necessary files in odject, for easy to use

var components = {
    css: [
        "src/css/libs/reset.css",
        "node_modules/animate.css/animate.min.css",
        "src/css/fonts.scss",
        "src/css/function.scss",
        "src/css/common.scss",
        "src/css/header.scss",
        "src/css/about.scss",
        "src/css/partners.scss",
        "src/css/holidays.scss",
        "src/css/search.scss",
        "src/css/footer.scss",
        "src/css/media/mediaTablet.scss",
        "src/css/media/mediaDesktop.scss"
    ],
    js: [
        "src/js/service/imagesService.js",
        "src/js/slider.js",
        "src/js/app.js"
    ],
    img: [
        "src/img/promo-mobile.png",
        "src/img/promo.png",
        "src/img/partner-1.png",
        "src/img/partner-2.png",
        "src/img/partner-3.png",
        "src/img/partner-4.png",
        "src/img/logo.png",
        "src/img/arrows.png"
    ]
};

//clean task

gulp.task('clean', function () {
    return gulp.src('dist/*')
        .pipe(clean({ force: true }))
});



//copy tasks

gulp.task('css', function () {
    return gulp.src(components.css)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat("main.min.css"))
        .pipe(minify_css())
        .pipe(gulp.dest('dist/css'));

});



gulp.task('js', function () {
    return gulp.src(components.js)
        .pipe(babel({
            compact: false,
            only: ["src/js/service/imagesService.js", "src/js/app.js"]
        }))
        .pipe(concat('main.script.min.js'))
        //.pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js/')); // Выгружаем в папку dist/js
});

gulp.task('js:libs', function () {
    return gulp.src("src/js/libs/*.js")
        //.pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js/')); // Выгружаем в папку dist/js
});

gulp.task('fonts', function () {
    return gulp.src("src/fonts/*")
        .pipe(gulp.dest('dist/fonts'));

});

gulp.task('img', function () {
    return gulp.src(components.img)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));

});

gulp.task('sprite:icons', function () {
    var spriteData =
        gulp.src('src/img/*-icon.png') // путь, откуда берем картинки для спрайта
            .pipe(imagemin())
            .pipe(spritesmith({
                imgName: 'sprite-icons.png',
                cssName: 'sprite-icons.css',
                padding: 20,
                algorithm: "left-right"
            }));

    spriteData.img.pipe(gulp.dest('dist/img')); // путь, куда сохраняем картинку
    //spriteData.css.pipe(gulp.dest('src/css')); // путь, куда сохраняем стили
});

gulp.task('sprite:steps', function () {
    var spriteData =
        gulp.src('src/img/step*.png') // путь, откуда берем картинки для спрайта
            .pipe(imagemin())
            .pipe(spritesmith({
                imgName: 'sprite-steps.png',
                cssName: 'sprite-steps.css',
                padding: 1,
                algorithm: "left-right"
            }));

    spriteData.img.pipe(gulp.dest('dist/img')); // путь, куда сохраняем картинку
    //spriteData.css.pipe(gulp.dest('src/css')); // путь, куда сохраняем стили
});



//default task
gulp.task("default", ['clean', 'css', 'js', 'js:libs', 'img', "sprite:icons", "sprite:steps", 'fonts']);


//watch task for css and js files

gulp.task('watch', function () {
    gulp.watch("src/js/**/*.js", ['js']);
    gulp.watch(components.css, ['css']);
    gulp.watch("src/fonts/*", ['fonts']);
    gulp.watch("src/img/*", ['img']);
})