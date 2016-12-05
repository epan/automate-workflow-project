var gulp = require('gulp');
// requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.+(sass|scss)')
  .pipe(sass({
    precision: 2 // Sets number of decimal points to 2
  })) // Compiles Sass into CSS with gulp-sass
  .pipe(gulp.dest('app/css'))
});
