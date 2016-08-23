(function () {
    'use strict';

    const gulp = require('gulp'),
          exec = require('child_process').exec;

    gulp.task('build', function () {
        exec('sudo npm install', {
            cwd: './swagger-editor'
        }, function (error, stdout, stderr) {
            console.log(stdout);
        });
    });
})();
