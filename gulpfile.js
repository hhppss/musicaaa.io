var             browserSync 		= require('browser-sync'),
				gulp 				= require('gulp'),
				browserSync 		= require('browser-sync').create(),
				sass        		= require('gulp-sass'),
				reload      		= browserSync.reload,
				cleanCSS 		    = require('gulp-clean-css'),
				size                = require('gulp-filesize'),
				rename              = require("gulp-rename");
const           imagemin 	        = require('gulp-imagemin'),
				autoprefixer        = require('gulp-autoprefixer');


// compile sass file
gulp.task('sass', function() {
    return gulp.src("app/sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream())
        .pipe(size());
});


//localhost
gulp.task('serve', gulp.series('sass', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });

    gulp.watch("app/sass/*.sass", gulp.series('sass',));
    gulp.watch("app/*.html").on("change", reload);
}));


// image minimaizer
gulp.task('image-min', () =>
    gulp.src('app/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'))
);

//autoprefixer
gulp.task('prefix', () =>
    gulp.src('app/css/*.css')
    				.pipe(size())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(size())
);

gulp.task('minify-css', () => {
  return gulp.src('app/css/style.css')
  		.pipe(rename("style.min.css"))
  		.pipe(size())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('app/css/'))
    .pipe(size());
});

//default
gulp.task('default', gulp.series('serve',));

//build
gulp.task('build', gulp.series('prefix', gulp.series('minify-css' , 'image-min')));
