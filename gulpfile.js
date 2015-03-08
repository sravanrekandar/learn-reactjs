/*
var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var watchify = require('watchify');

var bundler = watchify(browserify('./components/main.jsx', watchify.args));
gulp.task('browserify', bundle);
bundler.on('update', bundle);


function bundle(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./components/main.jsx');
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public'));
}
*/

var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');

var bundler = watchify(browserify('./public/components/main.jsx', watchify.args));
// add any other browserify options or transforms here
bundler.transform(reactify);

gulp.task('default', bundle); // so you can run `gulp js` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler
bundler.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you dont want sourcemaps
      .pipe(buffer())
      //.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
      //.pipe(sourcemaps.write('./')) // writes .map file
    //
    .pipe(gulp.dest('./public'));
}