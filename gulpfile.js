'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	uglifyCss = require('gulp-uglifycss'),
	rename = require('gulp-rename'),
	maps = require('gulp-sourcemaps'),
	del = require('del');

gulp.task("concatScripts", function() {
	return gulp.src([
		'js/jquery.js',
		'js/fastclick.js',
		'js/foundation.js',
		'js/foundation.equalizer.js',
		'js/foundation.reveal.js',
		'js/scripts.js' ])
	.pipe(maps.init())
	.pipe(concat("app.js"))
	.pipe(maps.write('./'))
	.pipe(gulp.dest("js"));
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

gulp.task("minifyScripts", ["concatScripts"], function() {
	return gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'));
});

gulp.task("minifyCss", ["concatCss"], function() {
  return gulp.src("css/main.css")
    .pipe(uglifyCss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('css'));
});


gulp.task('clean', function() {
	del(['dist', 'css/main*.css*', 'js/app*.js*']);
})

gulp.task("build", ['minifyScripts', 'minifyCss'], function() {
	return gulp.src( ["css/main.min.css", "js/app.min.js", 'index.html',
						"img/**" ], { base: './' } )
		.pipe(gulp.dest('dist'));
});

gulp.task( "default", ["clean"], function() {
	gulp.start('build');
});