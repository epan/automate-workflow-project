var gulp = require('gulp');
// requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('app/scss/styles.scss')
  .pipe(sass()) // Compiles Sass into CSS with gulp-sass
  .pipe(gulp.dest('app/css'))
});
