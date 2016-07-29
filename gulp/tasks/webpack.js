var gulp      = require('gulp');
var gutil     = require("gulp-util");
var webpack   = require('webpack');
var config    = require('../config').webpack;
var merge     = require('lodash.merge');

gulp.task('webpack', function(callback) {
  webpack(config.conf, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  });
});