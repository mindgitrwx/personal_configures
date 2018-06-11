var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

gulp.task('test', function () {
  return gulp.src('spec/*.js')
  .pipe(plug.jasmine({
    verbose: true,
    includeStackTrace: true
  }));
});

gulp.task('default', ['test']);
