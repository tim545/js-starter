
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var path = require('path');
var del = require('del');

var plugins = {
  jade: require('gulp-jade'),
  sass: require('gulp-sass'),
  babel: require('gulp-babel'),
  eslint: require('gulp-eslint'),
  server: require('gulp-server-livereload'),
  webpack: require('webpack-stream'),
  rename: require('gulp-rename'),
  concat: require('gulp-concat'),
  minify: require('gulp-minify')
};

gulp.task('clean', function () {
  del(['dist/**/*']);
});

gulp.task('jade', function() {
  gulp.src('src/index.jade')
  .pipe(plugins.jade())
  .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  gulp.src('src/assets/styles/style.scss')
  .pipe(plugins.sass())
  .pipe(gulp.dest('dist'));
});

gulp.task('jsDependencies', function() {
  gulp.src('src/dependencies/*.js')
  .pipe(plugins.concat('app-dependencies.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  gulp.src(['src/index.js', 'src/components/**/*.js', 'src/state/**/*.js'])
  .pipe(plugins.eslint())
  .pipe(plugins.eslint.format())
  .pipe(plugins.eslint.failAfterError());
});

gulp.task('babel', ['lint'], function() {
  gulp.src(['src/index.js', 'src/components/**/*.js', 'src/state/**/*.js'])
  .pipe(plugins.babel())
  .pipe(plugins.concat('app.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('minify', ['babel'], function() {
  gulp.src('dist/app.js')
  .pipe(plugins.minify({mangle:false}))
  .pipe(gulp.dest('dist'));
});

gulp.task('server', function() {
  gulp
  .src(path.join(__dirname, 'dist'))
  .pipe(plugins.server({
    livereload: true,
    open: true
  }));
});

gulp.task('default', ['clean', 'jade', 'sass', 'jsDependencies', 'lint', 'babel', 'minify', 'server'], function() {
  gulpUtil.log('Complete Gulp compile without errors');
});

gulp.watch('src/**.*', ['default']);
