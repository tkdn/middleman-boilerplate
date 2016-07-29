var gulp         = require('gulp');
var sass         = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass;
var sourcemaps   = require('gulp-sourcemaps');
var gutil        = require('gulp-util');

function isDevelopment(){
  if(process.env.NODE_ENV != 'production'){
    return true;
  } else {
    return false;
  }
}

gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(isDevelopment() ? sourcemaps.init() : gutil.noop())
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(isDevelopment() ? sourcemaps.write('./map') : gutil.noop())
    .pipe(gulp.dest(config.dest));
});
