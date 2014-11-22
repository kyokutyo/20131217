gulp = require 'gulp'
browserSync = require 'browser-sync'
concat = require 'gulp-concat'
files = ['*.py', 'templates/*.html']

gulp.task 'browser-sync', ->
  browserSync.init null,
    notify: true
    browser: 'google chrome canary'
    proxy: 'localhost:8080'

gulp.task 'watch', ->
  gulp.watch files, browserSync.reload

gulp.task 'default', ['browser-sync', 'watch']
