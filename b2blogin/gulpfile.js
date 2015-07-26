/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var karma = require('gulp-karma');
var clean = require('gulp-clean');
gulp.task('default', function () {
    // place code for your default task here
});
gulp.task('bower', function () {
    return bower('./bower_components');
});
gulp.task('clean', function () {
    return gulp.src('Scripts/lib', { read: false })
        .pipe(clean());
});
gulp.task('copyLibs', ['bower'], function () {
    gulp.src(['bower_components/angular/*.min.{js,map}'])
        .pipe(gulp.dest('Scripts/lib'));

    gulp.src(['bower_components/jquery/dist/*.min.{js,map}'])
        .pipe(gulp.dest('Scripts/lib'));
});