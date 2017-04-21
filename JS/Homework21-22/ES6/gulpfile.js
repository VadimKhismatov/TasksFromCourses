var gulp = require("gulp");
var concat = require("gulp-concat");
var minify_css = require("gulp-clean-css");
var uglify = require('gulp-uglifyjs');
var clean = require("gulp-clean");
var babel = require('gulp-babel');

//gather all necessary files in odject, for easy to use
var components = {
    js: [
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/bootstrap/dist/js/bootstrap.min.js",
        "src/js/libs/template.js",
        "src/js/quizeService.js",
        "src/js/templateService.js",
        "src/js/app.js",

    ],
    css: [
        "bower_components/bootstrap/dist/css/bootstrap.min.css",
        "src/css/style.css",
    ],
    fonts: [
    ],
};

//clean tasks

gulp.task('clean', ['clean:all']); //main clean task, remove js and css folders in dist

gulp.task('clean:all', function () {
    return gulp.src('dist/*')
        .pipe(clean({ force: true }))
});



//copy tasks

gulp.task('css', function () {
    return gulp.src(components.css)
        .pipe(concat("main.style.min.css"))
        .pipe(minify_css())
        .pipe(gulp.dest('dist/css'));

});



gulp.task('js', function () {
    return gulp.src(components.js)
        .pipe(babel({
            compact: false,
            only: ["src/js/quizeService.js", "src/js/templateService.js", "src/js/app.js",]
        }))
        .pipe(concat('main.script.min.js'))
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js/')); // Выгружаем в папку dist/js
});




//default task
gulp.task("default", ['clean:all', 'css', 'js']);


//watch task for css and js files

gulp.task('watch', function () {
    gulp.watch(components.js, ['js']);
    gulp.watch("src/css/**/*.css", ['css']);
})