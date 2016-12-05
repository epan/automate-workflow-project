var gulp = require('gulp');
// requires the gulp-sass plugin
var sass = require('gulp-sass');
// for error prevention for multiple plugins
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('watch', ['sass'], function() {
  gulp.watch('app/scss/**/*.+(sass|scss)', ['sass']);
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.+(sass|scss)')
    .pipe(customPlumber('Error Running Sass'))
    .pipe(sass({
      precision: 4 // Sets number of decimal points to 2
    })) // Compiles Sass into CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});

function customPlumber(errTitle) {
  return plumber({
    errorHandler: notify.onError({
        // customize error title
        title: errTitle || "Error running Gulp",
        message: "Error: <%= error.message %>",
    })
  });
}
