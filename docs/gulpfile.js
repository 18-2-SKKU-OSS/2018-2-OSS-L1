var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var jade        = require('gulp-jade');
var deploy      = require('gulp-gh-pages');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('deploy', function () {
    return gulp.src("docs/**/*")
      .pipe(deploy())
});


/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});



/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});


/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: 'docs/_site'
        },
        notify: false
    });
});




/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('docs/assets/css/main.scss')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('docs/_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('docs/assets/css'));
});

/*
* Travis is trying to Gulp stuff
*/

gulp.task('jade', function(){
  return gulp.src('docs/_jadefiles/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('docs/_includes'));
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('docs/assets/css/**', ['sass']);
    gulp.watch('docs/assets/js/**', ['jekyll-rebuild']);
    gulp.watch(['index.html', 'docs/_layouts/*.html', 'docs/_includes/*'], ['jekyll-rebuild']);
    gulp.watch('docs/assets/js/**', ['jekyll-rebuild']);
    gulp.watch('docs/_jadefiles/*.jade', ['jade']);
});




/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
