// gulp dev tasks
'use strict';

// this is necessary to expose the translation task to this gulpfile
require('gulpfile.localization');

// node modules
var open = require('open');

// gulp plugins
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var gutil = require('gulp-util');

// local libs
var Server = require('server/server');

gulp.task('less', function() {
    gulp.src('./src/less/styles.less')
        .pipe(sourcemaps.init())
        .pipe(less().on('error', gutil.log))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/css'))
        .pipe(livereload());
});

gulp.task('js', function() {
    return gulp.src(['./src/**/*.js'])
        .pipe(livereload());
});

gulp.task('html', function() {
    gulp.src(['./src/**/*.html'])
        .pipe(livereload());
});

gulp.task('watch', ['less', 'js', 'html', 'localization'], function() {
    gulp.watch(['./src/**/*.less'], ['less']);
    gulp.watch(['./src/**/*.js'], ['js']);
    gulp.watch(['./src/**/*.html'], ['html']);
    gulp.watch([
        './src/components/**/localization/**/*.json',
        './src/bower_components/koco-*/localization/**/*.json'
    ], ['localization']);
});

gulp.task('local', ['watch'], function(callback) {
    var log = gutil.log;
    var colors = gutil.colors;

    new Server().start(function(err, url) {
        //TODO: Handle err

        if (gutil.env.open) {
            log('Opening ' + colors.green('local') + ' server URL in browser');
            open(url);
        } else {
            log(colors.gray('(Run with --open to automatically open URL on startup)'));
        }

        callback(); // we're done with this task for now
    });
});

gulp.task('default', ['local']);
