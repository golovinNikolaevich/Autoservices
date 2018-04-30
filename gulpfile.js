var gulp = require('gulp'),
	  sass = require('gulp-sass'), // Преобразовует sass в css
		cssmin = require('gulp-cssmin'); // Минимизирует css

gulp.task('buildCSS', function(){
	return gulp.src('app/sass/*.scss') // Путь к файлам
		.pipe(sass()) // Преобразовуем sass в css
		.pipe(cssmin()) // Минимизируем css
		.pipe(gulp.dest('app/css')) // Выгружаем результат
})