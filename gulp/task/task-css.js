const gulp = require('gulp')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const uglifycss = require('gulp-uglifycss')


gulp.task('styles-all', () => {
  gulp.start('styles', 'styles-min','grid')
})

gulp.task('styles-min', () => {
  gulp.src(`../app/assets/styles/scss/init.scss`)
    .pipe(concat(`styles-min.css`))
    .pipe(sass())
    .pipe(uglifycss(
      {
        "maxLineLen": 80,
        "uglyComments": true
      }
    ))
    .pipe(autoprefixer(
      {
        browsers: ['last 2 versions'],
        cascade: false
      }
    ))
    .pipe(gulp.dest(`../app/assets/styles/`))
  console.log(`styles-min OK !!`)
})

gulp.task('styles', () => {
  gulp.src(`../app/assets/styles/scss/init.scss`)
    .pipe(concat(`styles.css`))
    .pipe(sass())
    .pipe(gulp.dest(`../app/assets/styles/`))
  console.log(`styles OK !!`)
})

gulp.task('grid', () => {
  gulp.src(`../app/assets/styles/scss/layout/grid-sass.scss`)
  .pipe(sass())
  .pipe(concat(`grid.scss`))
    .pipe(gulp.dest(`../app/assets/styles/scss/layout/`))
  console.log(`grid OK !!`)
})