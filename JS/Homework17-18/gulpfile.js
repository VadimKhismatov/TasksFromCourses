var gulp = require("gulp");
var concat = require("gulp-concat");
var minify_css = require("gulp-clean-css");
var uglify = require('gulp-uglifyjs');
var clean = require("gulp-clean");

//gather all necessary files in odject, for easy to use
var components = {
    js: [
        "bower_components/jquery/dist/jquery.min.js",
        "src/js/libs/template.js",
        "src/js/app.js"
    ],
    css: [
        "bower_components/bootstrap/dist/bootstrap.min.css",
        "src/css/style.css",
    ],
};

//clean tasks

gulp.task('clean', ['clean:css', 'clean:js']); //main clean task, remove js and css folders in dist

gulp.task('clean:css', function () { // clean(remove) css folder in dist
    return gulp.src('dist/css')
        .pipe(clean({ force: true }))
});

gulp.task('clean:js', function () { //clean(remove) js folder in dist
    return gulp.src('dist/js')
        .pipe(clean({ force: true }))
});


//copy tasks

gulp.task('css', function () { // concat and minify CSS
    return gulp.src(components.css)
        .pipe(concat('main.min.css')) // Собираем их в кучу в новом файле main.min.css
        .pipe(minify_css()) // Сжимаем CSS файл
        .pipe(gulp.dest('dist/css')); // Выгружаем в папку dist/css
});


gulp.task('scripts', function () {
    return gulp.src(components.js)
        .pipe(concat('main.min.js')) // Собираем их в кучу в новом файле main.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js')); // Выгружаем в папку dist/js
});


//watch task for css and js files

gulp.task('watch', function () {
    gulp.watch("src/js/**/*.js", ['scripts']);
    gulp.watch("src/css/**/*.css", ['css']);

})