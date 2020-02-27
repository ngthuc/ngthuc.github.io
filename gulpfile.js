var gulp = require('gulp');
// var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
// var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('gulp4-run-sequence');

// Basic Gulp task syntax
gulp.task('start', function(done) {
  console.log('Starting pipeline!');
  done();
});

// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
});

gulp.task('sass', function(done) {
//   return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
//     .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
//     .pipe(gulp.dest('app/css')) // Outputs it in the css folder
//     .pipe(browserSync.reload({ // Reloading with Browser Sync
//       stream: true
//     }));
  return done();
});

// Watchers
gulp.task('watch', function(done) {
  // gulp.watch('app/scss/**/*.scss', ['sass']);
  // gulp.watch('app/*.html', browserSync.reload);
  // gulp.watch('app/js/**/*.js', browserSync.reload);
  return done();
});

// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    // .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('../ngthuc'));
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

// Copying index.html to root dir 
gulp.task('index', function(done) {
  // return gulp.src('dist/index.html')
  //   .pipe(gulp.dest('../ngthuc'))
  return done();
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

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  )
});

gulp.task('prod', function(callback) {
  runSequence(
    'clean',
    ['sass', 'useref', 'images', 'fonts'], 
    'index',
    callback
  )
});