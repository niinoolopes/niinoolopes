const gulp = require('gulp');


gulp.task('watch', () => {
  gulp.watch(`../app/assets/styles/scss/**/*.scss`, ['styles', 'styles-min']);
  gulp.watch(`../app/assets/styles/scss/layout/grid-sass.scss`, ['grid']);
  gulp.watch(`../app/assets/scripts/src/**/*.js`, ['scripts', 'scripts-min']);
});