const gulp = require('gulp');

require('./task/task-createFiles.js')
require('./task/task-css.js')
require('./task/task-deploy.js')
require('./task/task-javascript.js')
require('./task/task-server.js')
require('./task/task-watch.js')


gulp.task('default', () => { 
    gulp.start('styles-all')
    gulp.start('scripts-all')
    gulp.start('watch')
    gulp.start('server')
})


/*
- COMANDOS


-- novo
    gulp create-app
    gulp create-deploy


-- dev
    gulp
    

-- deploy
    gulp deploy


-- CSS
    gulp styles-all
    gulp styles-min
    gulp styles
    gulp grid


-- JAVASCRIPT
    gulp scripts-all
    gulp scripts-min
    gulp scripts


-- server
    gulp server


-- watch
    gulp watch
*/