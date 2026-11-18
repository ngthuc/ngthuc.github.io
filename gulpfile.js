var gulp = require('gulp');
// var sass = require('gulp-sass');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
// var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('gulp4-run-sequence');
var rename = require('gulp-rename');
var fileInclude = require('gulp-file-include');

// renameIndex renames the index file and puts it
// in the root directory
// gulp.task('renameIndex', ['minIndex'], function () {
//     return gulp.src('index/index.debug.html')
//         .pipe(gulpRename('index/index.release.html'))
//         .pipe(gulp.dest('.'));
// });

// Basic Gulp task syntax
gulp.task('start', function (done) {
	console.log('Starting pipeline!');
	done();
});

// Development Tasks 
// -----------------

// Start browserSync server
// gulp.task('browser-sync', function() {
//   browserSync({
//     server: {
//       baseDir: './'
//     }
//   });
//
//   gulp.watch("app/*.html").on('change', browserSync.reload);
//   gulp.watch('app/css/*.less', ['less']).on('change', browserSync.reload);
//   gulp.watch("app/js/*.js").on('change', browserSync.reload);
// });

// Expands app/production.html's @@include() partials into app/index.html
// so browser-sync has a plain HTML file to serve during development.
// app/index.html is generated — don't hand-edit it, edit production.html
// and the files under app/partials/ instead.
gulp.task('html:dev', function () {
	return gulp.src('./app/production.html')
		.pipe(fileInclude({prefix: '@@', basepath: '@file'}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./app'));
});

gulp.task('watch', gulp.series('html:dev', function (done) {
	browserSync({
		server: {
			baseDir: './app'
		}
	});

	gulp.watch(['./app/production.html', './app/partials/**/*.html'], gulp.series('html:dev')).on('change', browserSync.reload);
	gulp.watch('./app/css/*.less', gulp.series('less')).on('change', browserSync.reload);
	gulp.watch('./app/js/*.js').on('change', browserSync.reload);
	done();
}));

// Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function(done) {
//   // return gulp.src("app/scss/*.scss") // Gets all files ending with .scss in app/scss and children dirs
//   //     .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
//   //     .pipe(gulp.dest("app/css")) // Outputs it in the css folder
//   //     .pipe(browserSync.stream()); // Stream to Browser Sync
//       return done();
// });

gulp.task('less', function () {
	return gulp.src('./app/css/*.less')
		.pipe(less().on('error', function (err) {
			console.log(err);
		}))
		.pipe(gulp.dest('./public/css'));
});

// Static Server + watching scss/html files
// gulp.task('serve', function(callback) {
//   runSequence(['sass','browser-sync'], callback);
//   // gulp.watch("app/scss/**/*.scss", ['sass']);
//   gulp.watch("app/*.html").on('change', browserSync.reload);
//   gulp.watch("app/js/**/*js").on('change', browserSync.reload);
// });

// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
// gulp.task('useref', function() {
//   return gulp.src('app/*.html')
//     .pipe(useref())
//     .pipe(gulpIf('*.js', uglify({ mangle: false })))
//     .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('.'));
// });

gulp.task('useref', function () {
	return gulp.src('./app/production.html')
		.pipe(fileInclude({prefix: '@@', basepath: '@file'}))
		.pipe(rename('index.html'))
		.pipe(useref())
		.pipe(gulpIf('./app/*.js', uglify({mangle: false})))
		.pipe(gulpIf('./app/*.css', cssnano()))
		.pipe(gulp.dest('./public'));
});

// Optimizing Images 
gulp.task('images', function () {
//   return gulp.src('images/**/*.+(png|jpg|jpeg|gif|svg)')
//     // Caching images that ran through imagemin
//     .pipe(cache(imagemin({
//       interlaced: true,
//     })))
//     .pipe(gulp.dest('dist/images'))
	return gulp.src('./app/images/**')
		.pipe(gulp.dest('public/images'));
});

// Copying fonts 
gulp.task('fonts', function () {
	return gulp.src('./app/fonts/**/*')
		.pipe(gulp.dest('public/fonts'));
});

// Copying CNAME config file
gulp.task('cname', function () {
	return gulp.src('CNAME')
		.pipe(gulp.dest('public/'));
});

// Copying React files
gulp.task('logo192', function () {
	return gulp.src('./app/logo192.png')
		.pipe(gulp.dest('public/'));
});
gulp.task('logo512', function () {
	return gulp.src('./app/logo512.png')
		.pipe(gulp.dest('public/'));
});
gulp.task('manifest', function () {
	return gulp.src('./app/manifest.json')
		.pipe(gulp.dest('public/'));
});
gulp.task('robots', function () {
	return gulp.src('./app/robots.txt')
		.pipe(gulp.dest('public/'));
});
gulp.task('favicon', function () {
	return gulp.src('./app/favicon.ico')
		.pipe(gulp.dest('public/'));
});

gulp.task('react-files', function (callback) {
	runSequence(['logo192', 'logo512', 'manifest', 'robots', 'favicon'], callback);
});

// Cleaning 
// gulp.task('clean', function() {
//   return del.sync(['dist/**/*', 'images/**/*', 'fonts/**/*', 'css/**/*', 'js/**/*', 'production.html', '!dist/images', '!dist/images/**/*']).then(function(cb) {
//     return cache.clearAll(cb);
//   });
// });

gulp.task('clean', function (done) {
	// del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
	// del.sync(['images/**/*', 'fonts/**/*', 'css/**/*', 'js/**/*', 'production.html', '!images', '!images/**/*', '!fonts', '!fonts/**/*']);
	del.sync('public/**/*');
	done();
});

gulp.task('clean:image', function (done) {
	del.sync('images/**/*');
	done();
});

// gulp.task('default', function(callback) {
//   runSequence(['serve'], callback)
// });

// Start browserSync server
gulp.task('serve', function () {
	browserSync({
		server: {
			baseDir: './app'
		}
	});
});

// Build Sequences
// ---------------

gulp.task('build', function (callback) {
	runSequence(
		'clean',
		'less',
		'useref',
		['images', 'fonts', 'react-files', 'cname'],
		callback
	);
});

// Default choices
gulp.task('default', function (callback) {
	runSequence(['build'], callback);
});