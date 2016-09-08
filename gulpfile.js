var gulp = require('gulp');
var webserver = require('gulp-webserver');

var assetsDev = 'scss/';
var assetsProd = 'public/css/';


var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssClean = require('gulp-clean-css');

gulp.task('build-css', function () {
  return gulp.src(assetsDev + '/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(cssClean({ compatibility: 'ie8' }))
    .pipe(gulp.dest(assetsProd));
});

gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      fallback: "index.html"
    }));
});

gulp.task('watch', function () {
  gulp.watch(assetsDev + '/*.scss', ['build-css']);
});

gulp.task('default', ['watch', 'build-css']);
