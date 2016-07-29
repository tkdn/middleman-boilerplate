// node modules for gulp tasks
require('date-utils');
var fs = require('fs');
// package.json to JsonObject
var package = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
// sass importpath settings / from neat intto sass task
var importPath = require('node-neat').includePaths;
// get current date:time for package task
var date = new Date().toFormat('YYYY-MM-DD-HH24-MI-SS');

// Directory variables
var dist;
var src = './source';
var assets = '/assets'

switch(process.env.NODE_ENV) {
  case 'production':
    dist = './build';
    break;
  default:
    dist = './.tmp/dist';
}

console.log(dist);

module.exports = {
  sass: {
    src: src + assets + '/css/**/*.scss',
    dest: dist + assets + '/css',
    settings: {
      outputStyle: 'compact',
      sourceComments: false,
      includePaths: importPath
    }
  },
  sprite: {
    images: src + assets + '/images/_sprite/*',
    imagedest: dist + assets + '/images/',
    cssdest: src + assets + '/css/helpers/'
  },
  zip: {
    src: [dist+'/**/*'],
    opts: {base: 'build'},
    name: date+'_'+package.name+'.zip',
    dist: 'target'
  },
  webpack: {
    conf: require('../webpack.config.js'),
  }
};
