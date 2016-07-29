var gulp    = require('gulp');
var del  = require('del');

gulp.task('clean:dev', function() {
  del([
    '.tmp/**/*.css',
    '.tmp/**/*.map',
    '.tmp/**/bg_sprite.png'
  ]);
});

gulp.task('clean:prod', function() {
  del([
    'build/**/*.css',
    'build/**/*.js',
    'build/**/bg_sprite.png'
  ]);
});
