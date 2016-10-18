'use strict';
/**
 * prettifyタスク
 * HTMLのインデントを揃える
 */
let gulp = require('gulp');
let config = require('./config');
let $ = require('./plugins');

gulp.task('prettify', () => {
    return gulp.src(config.path.html.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.prettify({
            'indent_size': 4,
            'indent_char': ' ',
            'indent_with_tabs': false
        }))
        .pipe(gulp.dest(config.path.ejs.dest))
        .pipe($.browser.stream());
});