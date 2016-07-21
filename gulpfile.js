var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
	return gulp.src('assets/scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function () {
	gulp.watch('assets/scss/*.scss', ['sass']);
});

gulp.task('default', function () {
	gulp.start(['sass', 'watch']);
	livereload.listen();
});