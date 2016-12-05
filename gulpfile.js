var gulp = require('gulp');
// requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.+(sass|scss)', ['sass']);
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.+(sass|scss)')
    .pipe(sass().on('error', errorHandler))
    .pipe(sass({
      precision: 4 // Sets number of decimal points to 2
    })) // Compiles Sass into CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});

function errorHandler(err) {
  // log error in command line
  console.log(err.toString());
  // ends the current pipe so Gulp watch doesn't break
  this.emit('end');
}
