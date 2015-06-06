var gulp = require('gulp'),
	livereload = require('gulp-livereload');

var hbsfiles = {
	path: ['./**/*.hbs']
};

gulp.task('lr', function(){
	gulp.src(hbsfiles.path)
	.pipe(livereload());
});

gulp.task('default', function(){
	livereload.listen();
	gulp.watch('./*.hbs', ['lr']);
});