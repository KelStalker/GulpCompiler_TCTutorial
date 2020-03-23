//  Requirements 
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

// Task for compiling SASS code
gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

// TypeScript compile  (hence the tsc acronym)
gulp.task('tsc', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest( './' ));
    // Note that the destination is simply ./ since we already told it the destination in the var declaration

});

// Default (watch) task
gulp.task( 'default' );

// Now we have a typescript task that will run the the 
// a sass task that will compile al of our scss files and compile them into the css/main file