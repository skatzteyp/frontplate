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

    $('a.js-scroll').on('click', function(event) {
        event.preventDefault();

        if (!$(this).hasClass('nolink')) {
            let id = $(this).attr('href'),
                target = $(id).offset().top;
            mStopOn();
            $('html, body').animate({scrollTop: target - HEADER_HEIGHT}, 500, mStopOff);
        }
    });
}