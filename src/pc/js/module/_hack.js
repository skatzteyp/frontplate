export default function hack() {

    'use strict';

    //htmlタグを変数に
    let htmlTag = document.documentElement;

    //userAgentを変数に
    let userAgent = window.navigator.userAgent.toLowerCase();

    //OS,ブラウザを変数に
    let osList = ['windows'];

    //スペースを定数に
    let SPACE = ' ';

    //OSを判定してhtmlタグにクラスをつける
    for (let i = 0, len = osList.length; i < len; i += 1) {

        if (userAgent.indexOf(osList[i]) !== -1) {
            htmlTag.className += SPACE + osList[i];

            break;
        }
    }
}