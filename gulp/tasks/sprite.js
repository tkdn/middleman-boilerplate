var gulp        = require('gulp');
var concat      = require('gulp-concat');
var merge       = require('merge-stream');
var spritesmith = require('gulp.spritesmith');
var config      = require('../config').sprite;


gulp.task('sprite', function () {
  // Generate our spritesheet
  var spriteData = gulp.src(config.images).pipe(spritesmith({
    imgName: 'bg_sprite.png',
    cssName: '_sprite.scss',
    padding: 20,
    imgPath: '../images/bg_sprite.png',
    cssTemplate: 'gulp/tasks/sprite_template.hbs'
  }));

  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    .pipe(gulp.dest(config.imagedest));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = merge(spriteData.css)
    .pipe(concat('_sprite.scss'))
    .pipe(gulp.dest(config.cssdest));
  // var cssStream = spriteData.css
  //   .pipe(gulp.dest(config.cssdest));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});