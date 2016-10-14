export default function smoothScroll() {

    'use strict';

    const HEADER_HEIGHT = 0;

    let $document = $(document);

    let mStopOn = () => {
        $document.on('DOMMouseScroll', preventDefault);
        $document.on('mousewheel', preventDefault);
    };

    let mStopOff = () => {
        $document.off('DOMMouseScroll', preventDefault);
        $document.off('mousewheel', preventDefault);
    };

    let preventDefault = (event) => {
        event.preventDefault();
    };

    let handleClick = (e) => {
        console.log(e.currentTarget);
        if (!$(e.currentTarget).hasClass('nolink')) {
            let id = $(e.currentTarget).attr('href'),
                target = $(id).offset().top;
            mStopOn();
            $('html, body').animate({scrollTop: target - HEADER_HEIGHT}, 500, mStopOff);
            e.preventDefault();
            return false;
        }
    };

    $('a.js-scroll').on('click', handleClick);
}