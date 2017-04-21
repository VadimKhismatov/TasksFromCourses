var gulp = require("gulp");
var concat = require("gulp-concat");
var minify_css = require("gulp-clean-css");
var uglify = require('gulp-uglifyjs');
var clean = require("gulp-clean");
var sass = require("gulp-sass");

//gather all necessary files in odject, for easy to use
var components = {
    js: [
        "bower_components/jquery/dist/jquery.min.js",
        "src/js/libs/owl.carousel.min.js",
        "src/js/slider.js",
        "src/js/accordion.js",
        "src/js/app.js",
    ],
    css: [
        "bower_components/components-font-awesome/css/font-awesome.min.css",
        "src/css/fonts.css",
        "src/css/libs/owl.carousel.css",
        "src/css/common.css",
        "src/css/header.scss",
        "src/css/main.scss",
        "src/css/footer.scss",
    ],
    fonts: [
        "bower_components/components-font-awesome/fonts/*.woff2",
        "bower_components/components-font-awesome/fonts/*.woff",
        "src/fonts/Ubuntu-Medium.woff2",
        "src/fonts/Ubuntu-Light.woff2",
    ],
};

//clean tasks

gulp.task('clean', ['clean:all']); //main clean task, remove js and css folders in dist

gulp.task('clean:all', function () {
    return gulp.src('dist/*')
        .pipe(clean({ force: true }))
});


//copy tasks

gulp.task('sass', function () {
    return gulp.src(components.css)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat("main.style.min.css"))
        .pipe(minify_css())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('js', function () {
    return gulp.src(components.js)
        .pipe(concat('main.script.min.js')) // Собираем их в кучу в новом файле main.script.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js')); // Выгружаем в папку dist/js
});

gulp.task("img", function () {
    return gulp.src("src/img/*")
        .pipe(gulp.dest("dist/images"));
});

gulp.task("fonts", function () {
    return gulp.src(components.fonts)
        .pipe(gulp.dest("dist/fonts"));
});

//default task
gulp.task("default", ['clean:all', 'sass', 'js', 'img', 'fonts']);


//watch task for css and js files

gulp.task('watch', function () {
    gulp.watch("src/js/**/*.js", ['js']);
    gulp.watch(["src/css/**/*.scss", "src/css/**/*.css"], ['sass']);
    gulp.watch("src/img/*", ['img']);
    gulp.watch("src/fonts/*", ['fonts']);

})