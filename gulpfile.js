var gulp = require('gulp');
// requires the gulp-sass plugin
var sass = require('gulp-sass');
// for error prevention for multiple plugins
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.+(sass|scss)', ['sass']);
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.+(sass|scss)')
    .pipe(customPlumber('Error Running Sass'))
    .pipe(sass()) // Compiles Sass into CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    // tells browserSync to reload files once task is done
    .pipe(browserSync.reload({
      stream: true
    }))
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

// browserSync task use web server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
});
