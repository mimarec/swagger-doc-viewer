(function () {
    'use strict';

    const gulp = require('gulp'),
          fs = require('fs');

    fs.readdirSync('./gulp').filter(function (file) {
        return (/\.(js|coffee)$/i).test(file);
    }).map(function (file) {
        require('./gulp/' + file);
    });

    gulp.task('default', function () {
        gulp.start('build');
    });
})();
