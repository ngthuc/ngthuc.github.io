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
var sharp = require('sharp');
var fs = require('fs');
var path = require('path');

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
//   gulp.watch("src/*.html").on('change', browserSync.reload);
//   gulp.watch('src/css/*.less', ['less']).on('change', browserSync.reload);
//   gulp.watch("src/js/*.js").on('change', browserSync.reload);
// });

// Expands src/production.html's @@include() partials into src/index.html
// so browser-sync has a plain HTML file to serve during development.
// src/index.html is generated — don't hand-edit it, edit production.html
// and the files under src/partials/ instead.
gulp.task('html:dev', function () {
	return gulp.src('./src/production.html')
		.pipe(fileInclude({prefix: '@@', basepath: '@file'}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./src'));
});

gulp.task('watch', gulp.series('html:dev', function (done) {
	browserSync({
		server: {
			baseDir: './src'
		}
	});

	gulp.watch(['./src/production.html', './src/partials/**/*.html'], gulp.series('html:dev')).on('change', browserSync.reload);
	gulp.watch('./src/css/*.less', gulp.series('less')).on('change', browserSync.reload);
	gulp.watch('./src/js/*.js').on('change', browserSync.reload);
	gulp.watch('./src/images/lastwork/*.max.*', gulp.series('thumbs')).on('change', browserSync.reload);
	done();
}));

// Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function(done) {
//   // return gulp.src("src/scss/*.scss") // Gets all files ending with .scss in src/scss and children dirs
//   //     .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
//   //     .pipe(gulp.dest("src/css")) // Outputs it in the css folder
//   //     .pipe(browserSync.stream()); // Stream to Browser Sync
//       return done();
// });

gulp.task('less', function () {
	return gulp.src('./src/css/*.less')
		.pipe(less().on('error', function (err) {
			console.log(err);
		}))
		.pipe(gulp.dest('./dist/css'));
});

// Static Server + watching scss/html files
// gulp.task('serve', function(callback) {
//   runSequence(['sass','browser-sync'], callback);
//   // gulp.watch("src/scss/**/*.scss", ['sass']);
//   gulp.watch("src/*.html").on('change', browserSync.reload);
//   gulp.watch("src/js/**/*js").on('change', browserSync.reload);
// });

// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
// gulp.task('useref', function() {
//   return gulp.src('src/*.html')
//     .pipe(useref())
//     .pipe(gulpIf('*.js', uglify({ mangle: false })))
//     .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('.'));
// });

gulp.task('useref', function () {
	return gulp.src('./src/production.html')
		.pipe(fileInclude({prefix: '@@', basepath: '@file'}))
		.pipe(rename('index.html'))
		.pipe(useref())
		.pipe(gulpIf('./src/*.js', uglify({mangle: false})))
		.pipe(gulpIf('./src/*.css', cssnano()))
		.pipe(gulp.dest('./dist'));
});

// Generates the Last Work grid thumbnails (*.min.webp) from the full-size
// screenshot each project ships as *.max.{png,jpg,jpeg}. Adding a new last
// work only ever means dropping in one *.max.png — this regenerates its
// resized, webp-converted thumbnail every build, so the hand-made *.min.webp
// nobody has to keep in sync by hand (and fixes any existing thumbnail,
// like unipass.min.webp, that was never actually resized down).
gulp.task('thumbs', function (done) {
	var dir = './src/images/lastwork';
	var files = fs.readdirSync(dir).filter(function (file) {
		return /\.max\.(png|jpe?g)$/i.test(file);
	});

	Promise.all(files.map(function (file) {
		var key = file.replace(/\.max\.(png|jpe?g)$/i, '');
		var input = path.join(dir, file);
		var output = path.join(dir, key + '.min.webp');
		return sharp(input)
			.resize({width: 600, withoutEnlargement: true})
			.webp({quality: 75})
			.toFile(output);
	})).then(function () {
		done();
	}, done);
});

// Optimizing Images
gulp.task('images', function () {
//   return gulp.src('images/**/*.+(png|jpg|jpeg|gif|svg)')
//     // Caching images that ran through imagemin
//     .pipe(cache(imagemin({
//       interlaced: true,
//     })))
//     .pipe(gulp.dest('dist/images'))
	return gulp.src('./src/images/**')
		.pipe(gulp.dest('dist/images'));
});

// Copying fonts
gulp.task('fonts', function () {
	return gulp.src('./src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
});

// Copying CNAME config file
gulp.task('cname', function () {
	return gulp.src('CNAME')
		.pipe(gulp.dest('dist/'));
});

// Copying static site files (icons, manifest, robots.txt)
gulp.task('logo192', function () {
	return gulp.src('./src/logo192.png')
		.pipe(gulp.dest('dist/'));
});
gulp.task('logo512', function () {
	return gulp.src('./src/logo512.png')
		.pipe(gulp.dest('dist/'));
});
gulp.task('manifest', function () {
	return gulp.src('./src/manifest.json')
		.pipe(gulp.dest('dist/'));
});
gulp.task('robots', function () {
	return gulp.src('./src/robots.txt')
		.pipe(gulp.dest('dist/'));
});
gulp.task('favicon', function () {
	return gulp.src('./src/favicon.ico')
		.pipe(gulp.dest('dist/'));
});

gulp.task('static-files', function (callback) {
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
	del.sync('dist/**/*');
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
			baseDir: './src'
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
		'thumbs',
		['images', 'fonts', 'static-files', 'cname'],
		callback
	);
});

// Default choices
gulp.task('default', function (callback) {
	runSequence(['build'], callback);
});
