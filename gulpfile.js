var gulp       = require('gulp'), // Подключаем Gulp
	sass         = require('gulp-sass'), //Подключаем Sass пакет,
	concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify       = require('gulp-uglify'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
	autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
	sourcemaps   = require('gulp-sourcemaps'),
    babel        = require('gulp-babel'),
    ngAnnotate = require('gulp-ng-annotate');

gulp.task('sass', function(){ // Создаем таск Sass
	return gulp.src('web-src/sass/**/*.sass') // Берем источник
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('public/stylesheets')); // Выгружаем результата в папку /css
});

gulp.task('scripts', function() {
    return gulp.src(['web-src/modules/main/app.js', 'web-src/modules/**/*.js', 'web-src/modules/**/js/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on('error', browserifyHandler)
        .pipe(ngAnnotate())
        .on('error', browserifyHandler)
        .pipe(concat('main.js'))
        // .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('public/javascripts/'))
});

gulp.task('watch', ['scripts'], function() {
	gulp.watch('web-src/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
	// gulp.watch(['index.html', 'web-src/modules/**/**/*.html'], browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch(['web-src/modules/**/*.js', 'web-src/modules/**/js/*.js'], ['scripts']);   // Наблюдение за JS файлами в папке js
	gulp.watch('web-src/**/*.html', ['html']);   // Наблюдение за html файлами.
});

gulp.task('clean', function() {
	return del.sync(['public']); // Удаляем папки css, js, images перед сборкой
});

gulp.task('img', function() {
	return gulp.src('web-src/img/**/*') // Берем все изображения из app
		.pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('public/images')); // Выгружаем на продакшн
});

gulp.task('html', function () {
	return gulp.src('web-src/**/*.html')
		.pipe(gulp.dest('public/views/'));
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts', 'html'], function() {

	// var buildCss = gulp.src([ // Переносим библиотеки в продакшн
	// 	'app/css/main.css',
	// 	'app/css/libs.min.css'
	// 	])
	// .pipe(gulp.dest('dist/css'))
    //
	// var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшн
	// .pipe(gulp.dest('dist/fonts'))
    //
	// var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшн
	// .pipe(gulp.dest('dist/js'))
    //
	// var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшн
	// .pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
});

function browserifyHandler(err) {
    util.log(util.colors.red('Error: ' + err.message));
    this.end();
};

gulp.task('default', ['build','watch']);
