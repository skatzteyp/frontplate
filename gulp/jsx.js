'use strict';
/**
 * スクリプトタスク
 * JSファイルをwebpackを使ってコンパイルして出力する
 */

let path = require('path');
let fs = require('fs');
let gulp = require('gulp');
let _ = require('lodash');
let through = require('through2');
let webpack = require('webpack');
let config = require('./config');
let $ = require('./plugins');
let conf;
let react = require('gulp-react');
/**
 * エントリーの登録
 */
gulp.task('jsx', () => {
    return gulp.src(config.path.jsx.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe(react())
        .pipe(gulp.dest(config.path.jsx.dest));
});
