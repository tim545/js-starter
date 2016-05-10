
const gulp = require('gulp');
const gulpUtil = require('gulp-util');
const path = require('path');
const del = require('del');

const plugins = {
  jade: require('gulp-jade'),
  sass: require('gulp-sass'),
  babel: require('gulp-babel'),
  eslint: require('gulp-eslint'),
  server: require('gulp-server-livereload'),
  rename: require('gulp-rename'),
  concat: require('gulp-concat'),
  minify: require('gulp-minify')
};

gulp.task('clean', ()=> {
  return del(['dist/**/*']);
});

gulp.task('jade', ()=> {
  return gulp.src('src/index.jade')
  .pipe(plugins.jade())
  .pipe(gulp.dest('dist'));
});

gulp.task('sass', ()=> {
  return gulp.src('src/assets/styles/style.scss')
  .pipe(plugins.sass())
  .pipe(gulp.dest('dist'));
});

gulp.task('jsDependencies', ()=> {
  return gulp.src('src/dependencies/*.js')
  .pipe(plugins.concat('app-dependencies.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('lint', ()=> {
  return gulp.src(['src/index.js', 'src/components/**/*.js', 'src/state/**/*.js'])
  .pipe(plugins.eslint())
  .pipe(plugins.eslint.format())
  .pipe(plugins.eslint.failAfterError());
});

gulp.task('concat', ()=> {
  return gulp.src(['src/components/**/*.jsx', 'src/state/**/*.js', 'src/index.js'])
  .pipe(plugins.concat('app.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('babel', ['lint', 'concat'], ()=> {
  return gulp.src('dist/app.js')
  .pipe(plugins.babel())
  .pipe(gulp.dest('dist'));
});

gulp.task('minify', ['babel'], ()=> {
  return gulp.src(['dist/app.js'])
  .pipe(plugins.minify({mangle:false}))
  .pipe(gulp.dest('dist'));
});

gulp.task('server', ['minify'], ()=> {
  return gulp.src(path.join(__dirname, 'dist'))
  .pipe(plugins.server({
    livereload: true,
    open: true,
    log: 'debug'
  }));
});

gulp.task('start', ['clean', 'jade', 'sass', 'jsDependencies', 'concat', 'lint', 'babel', 'minify', 'server']);
gulp.task('update', ['jade', 'sass', 'concat', 'lint', 'babel', 'minify']);

gulp.task('default', ['start']);
gulp.watch('src/**/*.*', ['update']);
