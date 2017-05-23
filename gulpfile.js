const gulp = require('gulp');
const sass = require('gulp-sass');
const moduleImporter = require('sass-module-importer');
const browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: "./",
    notify: false
  });

  gulp.watch("scss/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('sass', function() {
  return gulp.src("scss/*.scss")
    .pipe(sass({ importer: moduleImporter() }))
    .on('error', function(error) {
      console.error(error);
      this.emit('end');
    })
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

