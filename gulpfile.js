'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	uglifyCss = require('gulp-uglifycss'),
	rename = require('gulp-rename');

gulp.task("concatScripts", function() {
	return gulp.src([
		'js/jquery.js',
		'js/fastclick.js',
		'js/foundation.js',
		'js/foundation.equalizer.js',
		'js/foundation.reveal.js' ])
	.pipe(concat("app.js"))
	.pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
	return gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'));
});

gulp.task('concatCss', function() {
	return gulp.src([
		'css/normalize.css',
		'css/foundation.css',
		'css/basics.css',
		'css/menu.css',
		'css/hero.css',
		'css/photo-grid.css',
		'css/modals.css',
		'css/footer.css'])
	.pipe(concat('main.css'))
	.pipe(gulp.dest("css"));
});

gulp.task("minifyCss", ["concatCss"], function() {
  return gulp.src("css/main.css")
    .pipe(uglifyCss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('css'));
});


// gulp.task('watchFiles', function() {
// 	gulp.watch('js')
// });

gulp.task("build", ['minifyScripts']);

gulp.task( "default", ["hello"], function() {
	console.log(" This is a default task")
});