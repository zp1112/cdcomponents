'use strict'

var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssmin = require('gulp-cssmin')
var salad = require('postcss-salad')(require('./salad.config.json'))

gulp.task('compile', function () {
  return gulp.src('./src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('../../dist/theme-default'))
})

gulp.task('copyfont', function () {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('../../dist/fonts'))
})

gulp.task('compiledev', function () {
  return gulp.src('./src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/theme-default/'))
})

gulp.task('copyfontdev', function () {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/theme-default/fonts'))
})

gulp.task('dev', ['compiledev', 'copyfontdev'])

gulp.task('build', ['compile', 'copyfont'])
gulp.task('watch', function () {
  gulp.watch('./src/*.css', ['compile'])
})
