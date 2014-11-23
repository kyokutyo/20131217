gulp = require 'gulp'
react = require 'gulp-react'
plumber = require 'gulp-plumber'
browserSync = require 'browser-sync'
concat = require 'gulp-concat'
files = ['*.py', 'templates/*.html', 'static/build/*.js']

gulp.task 'browser-sync', ->
  browserSync.init null,
    notify: true
    browser: 'google chrome canary'
    proxy: 'localhost:8080'

gulp.task 'react', ->
  gulp.src 'static/js/*.js'
    .pipe plumber()
    .pipe react()
    .pipe gulp.dest('static/build')

gulp.task 'watch', ->
  gulp.watch 'static/js/*.js', ['react']
  gulp.watch files, browserSync.reload

gulp.task 'default', ['browser-sync', 'watch']
