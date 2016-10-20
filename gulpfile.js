var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var uglify = require("gulp-uglify");
var usemin = require("gulp-usemin");
var del = require('del');
var deleteEmpty = require('delete-empty');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task("minification", function() {
    return gulp.src("./www/*.html")
        .pipe(usemin({
            'js': [uglify],
            'css': [minifyCss]
        }))
        .pipe(gulp.dest("./www/dist"));
});

/* **********************************************************************************
 * This task is called from a hook to delete unnecessary files for building
 * **********************************************************************************/
gulp.task('delete-files', function() {
    del([
        'platforms/android/assets/www/dist/**',
        'platforms/android/assets/www/lib/**',
        'platforms/android/assets/www/app/**/*.js',
        'platforms/android/assets/www/css/ionic.app.css',
        'platforms/android/assets/www/css/ionic.app.min.css',
        'platforms/ios/www/dist/**',
        'platforms/ios/www/lib/**',
        'platforms/ios/www/app/**/*.js',
        'platforms/ios/www/css/ionic.app.css',
        'platforms/ios/www/css/ionic.app.min.css',
        './www/dist/**'
    ])
    .then(function() {
        deleteEmpty('platforms/android/assets/www/app/', function(err, deleted) {
            console.log("Empty folders deleted for android");
            console.log(deleted);
        });

        deleteEmpty('platforms/ios/www/app/', function(err, deleted) {
            console.log("Empty folders deleted for ios");
            console.log(deleted);
        });
    })
    .catch(function(err) {
        console.log('Error while deleting files');
        console.log(err);
    });
});

/* **********************************************************************************
 * This task is called from a hook to prepare files for building
 * **********************************************************************************/
gulp.task('build-prepare', ['minification'], function() {
    return gulp.src("./www/lib/ionic/fonts/**")
        .pipe(gulp.dest("./www/dist/fonts"));
});


/* **********************************************************************************
 * Demo
 * **********************************************************************************/

gulp.task('demo-prepare', function(done) {
    del("demo/**").then(function() {
        gulp.src(["./www/**", "!./www/css{,/**}", "!./www/index.html", "!./www/lib{,/**}"])
            .pipe(gulp.dest("demo"))
            .on("end", function() {
                gulp.src("./www/lib/ionic/fonts/**")
                    .pipe(gulp.dest("demo/fonts"))
                    .on("end", done);
            });
    });
});

gulp.task("demo-minify", ['demo-prepare'], function() {
    return gulp.src("./www/*.html")
        .pipe(usemin({
            'js': [uglify],
            'css': [minifyCss]
        }))
        .pipe(gulp.dest("./demo"));
});

gulp.task('demo', ['demo-minify'], function() {
    del([
        './demo/app/**/*.js',
        './demo/lib/**'
    ])
    .then(function() {
        deleteEmpty.sync('demo/');
    })
    .catch(function(err) {
        console.log('Error while deleting files');
        console.log(err);
    });
});

