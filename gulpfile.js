var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
const errorHandler = require('gulp-error-handle');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    var plugins = [
        autoprefixer(),
        cssnano()
    ];
    return gulp.src("app/scss/*.scss")
        .pipe(errorHandler())
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(gulp.dest("./docs/css"))
        .pipe(browserSync.stream());
});
gulp.task('img', () =>
	gulp.src('./app/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./docs/img'))
);
gulp.task('html', function() {
    return gulp.src('./app/')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./docs/'));
  });
gulp.task('default', ['serve']);