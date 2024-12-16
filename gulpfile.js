const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

gulp.task('html', function(){
  return gulp.src('./src/**/*.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function(){
  return gulp.src('src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/'));
});


gulp.task('scripts', function(){
  return gulp.src('./src/js/*.js')
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['babel-preset-env']
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist/js/'))
});

gulp.task('images', function(){
  return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/img/'))
});
gulp.task('fonts', function(){
  return gulp.src('./src/fonts/**/*', { encoding: false })
    .pipe(gulp.dest('./dist/fonts/'))
});

gulp.task('server', function(){
  return gulp.src('./dist').pipe(server({
    livereload: true,
    open: true
  }))
});

gulp.task('clean', function(done){
  if (fs.existsSync('./dist/')) {
    return gulp.src('./dist/', {read: false}).pipe(clean());
  }
  done();
});

gulp.task('watch', function(){
  gulp.watch('./src/js/**/*.js', gulp.parallel('scripts'));
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch('./src/**/*.html', gulp.parallel('html'));
  gulp.watch('./src/img/**/*', gulp.parallel('images'));
  gulp.watch('./src/fonts/**/*', gulp.parallel('fonts'));
});

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('html', 'sass', 'images', 'scripts', 'fonts'),
  gulp.parallel('server', 'watch')
));