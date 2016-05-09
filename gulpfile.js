
var path = require('path');
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var webpackConfig = require('./webpackConfig');
var plugins = {
  jade: require('gulp-jade'),
  sass: require('gulp-sass'),
  babel: require('gulp-babel'),
  eslint: require('gulp-eslint'),
  server: require('gulp-server-livereload'),
  webpack: require('webpack-stream'),
  rename: require('gulp-rename')
};

gulp.task('jade', function() {
  gulp
  .src('src/index.jade')
  .pipe(plugins.jade())
  .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function() {
  gulp
  .src('src/assets/styles/style.scss')
  .pipe(plugins.sass())
  .pipe(gulp.dest('dist/'));
});

gulp.task('lint', function() {
  gulp
  .src('src/index.js')
  .pipe(plugins.eslint())
  .pipe(plugins.eslint.format())
  .pipe(plugins.eslint.failAfterError());
});

gulp.task('webpack', function() {
  gulp.src('src/index.js')
  .pipe(plugins.webpack(webpackConfig))
  .pipe(plugins.rename(function(destPath) {
    destPath.basename = 'index';
  }))
  .pipe(gulp.dest('dist/'));
});

gulp.task('server', function() {
  gulp
  .src(path.join(__dirname, 'dist'))
  .pipe(plugins.server({
    livereload: true,
    open: true
  }));
});

gulp.task('default', ['jade', 'sass', 'lint', 'webpack', 'server'], function() {
  gulpUtil.log('Complete Gulp compile without errors');
});

gulp.watch('src/**.*', ['default']);
