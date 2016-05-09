var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var plugins = {
  jade: require('gulp-jade'),
  sass: require('gulp-sass'),
  babel: require('gulp-babel'),
  eslint: require('gulp-eslint')
};

var src = 'src/';

gulp.task('jade', function() {
  gulpUtil.log('------ jade');
  gulp
  .src('src/index.jade')
  .pipe(plugins.jade())
  .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function() {
  gulpUtil.log('------ sass');
  gulp
  .src('src/assets/styles/style.scss')
  .pipe(plugins.sass())
  .pipe(gulp.dest('dist/'));
});

gulp.task('lint', function() {
  gulpUtil.log('------ lint');
  gulp
  .src('src/index.js')
  .pipe(plugins.eslint())
  .pipe(plugins.eslint.format())
  .pipe(plugins.eslint.failAfterError());
});

gulp.task('babel', function() {
  gulpUtil.log('------ babel');
  gulp
  .src('src/index.js')
  .pipe(plugins.babel({
    presets: ['es2015', 'react']
  }))
  .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['jade', 'sass', 'lint', 'babel'], function() {
  // place code for your default task here
});