
const gulp = require('gulp');
const gulpUtil = require('gulp-util');
const path = require('path');
const browserify = require('browserify');
const babelify = require('babelify');
const reactify = require('reactify');
const source = require('vinyl-source-stream');
const envify = require('envify');

const plugins = {
  clean: require('gulp-clean'),
  jade: require('gulp-jade'),
  sass: require('gulp-sass'),
  babel: require('gulp-babel'),
  eslint: require('gulp-eslint'),
  server: require('gulp-server-livereload'),
  rename: require('gulp-rename'),
  concat: require('gulp-concat'),
  minify: require('gulp-minify')
};

const jsDependencies = [
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-intl',
  'react-bootstrap',
  'redux',
  'jquery',
  'moment',
  'lodash'
];

const tasks = {};

tasks.jade = ()=> {
  gulp.src('dist/index.html')
  .pipe(plugins.clean({force: true}))
  .on('error', gulpUtil.log);

  return gulp.src('src/index.jade')
  .pipe(plugins.jade())
  .pipe(gulp.dest('dist'))
  .on('error', gulpUtil.log);
};

tasks.sass = ()=> {
  gulp.src('dist/style.css')
  .pipe(plugins.clean({force: true}))
  .on('error', gulpUtil.log);

  return gulp.src('src/styles/style.scss')
  .pipe(plugins.sass({outputStyle: 'compressed'}))
  .on('error', plugins.sass.logError)
  .pipe(gulp.dest('dist'));
}

tasks.jsDependencies = ()=> {
  gulp.src('dist/app-dependencies.js')
  .pipe(plugins.clean({force: true}))
  .on('error', gulpUtil.log);

  const deps = browserify();
  jsDependencies.map(dep=> {
    deps.require(dep);
  });
  deps.transform('envify');

  return deps.bundle()
  .pipe(source('app-dependencies.js'))
  .pipe(gulp.dest('dist'))
  .on('error', gulpUtil.log);
};

tasks.lint = ()=> {
  return gulp.src([
    'src/**/*.js',
    'src/**/*.jsx'
  ])
  .pipe(plugins.eslint({
    configFile: '.eslintrc'
  }))
  .pipe(plugins.eslint.format())
  .pipe(plugins.eslint.failAfterError())
  .on('error', gulpUtil.log);
};

tasks.jsApp = ()=> {
  gulp.src('dist/app.js')
  .pipe(plugins.clean({force: true}))
  .on('error', gulpUtil.log);

  const app = browserify('src/index.js', {
    transform: ['babelify', 'reactify']
  });
  jsDependencies.map(dep=> {
    app.external(dep);
  });

  return app.bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('dist'))
  .on('error', gulpUtil.log);
};

tasks.babel = ()=> {
  return gulp.src('dist/app.js')
  .pipe(plugins.babel())
  .pipe(gulp.dest('dist'))
  .on('error', gulpUtil.log);
};

tasks.minifyApp = ()=> {
  gulp.src('dist/app-min.js')
  .pipe(plugins.clean({force: true}))
  .on('error', gulpUtil.log);

  return gulp.src(['dist/app.js'])
  .pipe(plugins.minify({mangle:false}))
  .pipe(gulp.dest('dist'))
  .on('error', gulpUtil.log);
};

tasks.minifyDeps = ()=> {
  gulp.src('dist/app-dependencies-min.js')
  .pipe(plugins.clean({force: true}))
  .on('error', gulpUtil.log);

  return gulp.src(['dist/app-dependencies.js'])
  .pipe(plugins.minify({mangle:false}))
  .pipe(gulp.dest('dist'))
  .on('error', gulpUtil.log);
};

tasks.server = ()=> {
  return gulp.src(path.join(__dirname, 'dist'))
  .pipe(plugins.server({
    livereload: true,
    open: true,
    log: 'debug'
  }));
};

gulp.task('jade', ()=> tasks.jade());
gulp.task('sass', ()=> tasks.sass());
gulp.task('jsDependencies', ()=> tasks.jsDependencies());
gulp.task('lint', ()=> tasks.lint());
gulp.task('jsApp', ()=> tasks.jsApp());
gulp.task('babel', ['lint', 'jsApp'], ()=> tasks.babel());
gulp.task('minifyApp', ['babel'], ()=> tasks.minifyApp());
gulp.task('minifyDeps', ['jsDependencies'], ()=> tasks.minifyDeps());
gulp.task('server', ['minifyApp', 'minifyDeps'], ()=> tasks.server());

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'production';
}

gulp.task('start', ['jade', 'sass', 'jsDependencies', 'jsApp', 'lint', 'babel', 'minifyDeps', 'minifyApp', 'server']);
gulp.task('update', ['jade', 'sass', 'jsApp', 'lint', 'babel', 'minifyApp']);

gulp.task('default', ['start']);
gulp.watch('src/**/*.*', ['update']);
