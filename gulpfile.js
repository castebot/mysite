var gulp = require('gulp'),
	livereload = require('gulp-livereload');

var hbsfiles = {
	path: ['./*.hbs', './partials/**/*.hbs']
};

gulp.task('lr', function(){
	gulp.src(hbsfiles.path)
	.pipe(livereload());
});

gulp.task('default', function(){
	livereload.listen();
	gulp.watch('./*.hbs', ['lr']);
	gulp.watch('./partials/*.hbs', ['lr']);
	gulp.watch('./assets/css/*.css', ['lr']);
});