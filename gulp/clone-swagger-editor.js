(function () {
    'use strict';

    const gulp = require('gulp'),
          git = require('gulp-git'),
          logger = require('log-level');

    gulp.task('clone', function () {
        git.clone('https://github.com/swagger-api/swagger-editor.git', (err) => {
            if (err) logger.error(err);
        });
    });
})();
