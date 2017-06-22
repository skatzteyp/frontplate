'use strict';
// https://github.com/frontainer/frontplate-cli/wiki/6.%E8%A8%AD%E5%AE%9A

module.exports = function (production) {
    global.FRP_SRC = 'src/pc';
    global.FRP_DEST = 'public/pc';
    return {
        clean: {},
        html: {
            ext: '.php'
        },
        style: {
            plugins: [  // postcssプラグイン     // postcssのプラグインです。デフォルトではautoprefixerのみ指定されています。
                require('autoprefixer')({
                    // autoprefixer(https://github.com/postcss/autoprefixer)
                    // サポートするブラウザを指定します
                    browsers: [
                        'last 3 version',
                        'ie >= 9',
                        'Android >= 4.0'
                    ]
                })
            ]
        },
        script: production ? {} : {},
        server: {
            proxy: '127.0.0.1:4000'
        },
        copy: {},
        sprite: [
            {
                src: `${FRP_SRC}/sprites/icon/*.{png,gif,jpg}`,    // 読み込む画像
                destImage: `${FRP_SRC}/images/icon.png`,           // 画像出力先
                destCSS: `${FRP_SRC}/sass/sprites/_icon.scss`,     // CSS出力先
                imgPath: '../images/icon.png',              // CSS内での画像パス
                padding: 2,                                 // 画像の間隔
                scale: 0.5,                                 // 画像表示サイズ（Retina対応なら0.5にする）
                mixin: true,                               // @mixin spriteを出力するかどうか
                selector: true                              // .icon {&.icon-name {}}のクラス定義を出力するかどうか
            }
        ],
        test: {}
    }
};
