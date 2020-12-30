var gulp = require('gulp');
// var sass = require('gulp-sass');
var less = require('gulp-less')
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
 
// renameIndex renames the index file and puts it
// in the root directory
// gulp.task('renameIndex', ['minIndex'], function () {
//     return gulp.src('index/index.debug.html')
//         .pipe(gulpRename('index/index.release.html'))
//         .pipe(gulp.dest('.'));
// });

// Basic Gulp task syntax
gulp.task('start', function(done) {
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

gulp.task('watch', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/css/*.less', gulp.series('less')).on('change', browserSync.reload);
  gulp.watch('app/js/*.js').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function(done) {
//   // return gulp.src("app/scss/*.scss") // Gets all files ending with .scss in app/scss and children dirs
//   //     .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
//   //     .pipe(gulp.dest("app/css")) // Outputs it in the css folder
//   //     .pipe(browserSync.stream()); // Stream to Browser Sync
//       return done();
// });

gulp.task('less', function () {
  return gulp.src('.app/css/*.less')
      .pipe(less().on('error', function (err) {
        console.log(err);
      }))
      .pipe(gulp.dest('.app/css'));
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

gulp.task('useref', function() {
  return gulp.src('app/index.html')
    .pipe(rename('index.html'))
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify({ mangle: false })))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('.'));
});

// Optimizing Images 
gulp.task('images', function() {
//   return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
//     // Caching images that ran through imagemin
//     .pipe(cache(imagemin({
//       interlaced: true,
//     })))
//     .pipe(gulp.dest('dist/images'))
  return gulp.src('app/images/**')
  .pipe(gulp.dest('images'))
});

// Copying fonts 
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('fonts'))
});

// Cleaning 
// gulp.task('clean', function() {
//   return del.sync(['dist/**/*', 'images/**/*', 'fonts/**/*', 'css/**/*', 'js/**/*', 'index.html', '!dist/images', '!dist/images/**/*']).then(function(cb) {
//     return cache.clearAll(cb);
//   });
// });

gulp.task('clean', function(done) {
  // del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
  del.sync(['images/**/*', 'fonts/**/*', 'css/**/*', 'js/**/*', 'index.html', '!images', '!images/**/*', '!fonts', '!fonts/**/*']);
  done();
});

gulp.task('clean:image', function(done) {
  del.sync('images/**/*');
  done();
});

// gulp.task('default', function(callback) {
//   runSequence(['serve'], callback)
// });

// Start browserSync server
gulp.task('default', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

// Build Sequences
// ---------------

gulp.task('build', function(callback) {
  runSequence(
    'clean',
    'less',
    ['useref', 'images', 'fonts'], 
    callback
  )
});