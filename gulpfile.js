var gulp     = require('gulp'),
    rename   = require('gulp-rename'),
    jshint   = require('gulp-jshint'),
    uglify   = require('gulp-uglify'),
    jasmine  = require('gulp-jasmine'),
    less     = require('gulp-less'),
    cleancss = require('gulp-clean-css'),
    ghpages  = require('gulp-gh-pages'),
    clean    = require('gulp-clean');

// Copies the JS file to the dist area.  Creates a minified version of it.
gulp.task('js', function(){
    return gulp.src('./lib/snozzcumber.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./lib/example/media'));
});

// Runs the jasmine test suite
gulp.task('test', function () {
    return gulp.src('./spec/test.js')
        .pipe(jasmine());
});

// make the CSS for the example scripts
gulp.task('css', function(){
    return gulp.src('./lib/example/media/app.less')
        .pipe(less())
        .pipe(cleancss({ 'keepSpecialComments':0 }))
        .pipe(rename('app.css'))
        .pipe(gulp.dest('./lib/example/media/'));
});

// Default task
gulp.task('default', [], function() {
    gulp.start('js', 'test', 'css');
});

// deploy to Github Pages
gulp.task('deploy', function () {
    // rebuild
    gulp.start('js', 'test', 'css');
    // copy to dest folder
    gulp.src('./lib/example/**/*.{png,gif,css,js,html}')
        .pipe(gulp.dest('./gh-pages/'));
    // deploy ./gh-pages to github
    //return gulp.src("./gh-pages/**/*")
    //    .pipe(ghpages());
})

// Watch
gulp.task('watch', function() {
    // Watch .js files
    gulp.watch('./lib/snozzcumber.js', ['js', 'test']);
    gulp.watch('./lib/gh-pages/media/app.less', ['css']);
});
