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
        .js.pipe(gulp.dest('./'));
    // Note that the destination is simply ./ since we already told it the destination in the var declaration

});

// Default (watch) task
// Watches to see if amy ts or scss files are updated and will see them
// Those changes are noticed and will cause a compilation of the ts/scss files by
// passing those tasks (above) into the watch 
gulp.task('default', function () {
    gulp.watch(
        ['src/scss/**/.scss', 'src/ts/**/*.ts'],
        gulp.series(['sass', 'tsc'])
    );
});

// Now we have a typescript task that will run the the 
// a sass task that will compile all of our scss files and compile them into the css folder
// a ts task taht will compile all of our ts code into the js folder

// **NOTE** To check if all our requirements are in place, run an npm install