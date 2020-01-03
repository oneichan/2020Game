phina.globalize();

const DIRECTION = {
    none : 0,
    top : 1,
    bottom : 2,
    right : 3,
    left : 4,
};

const ASSETS = {
    font : {
        fontAwesome:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff',
        chihaya:'./font/ちはや毛筆-free-.ttf',
        noto:'./font/NotoSerifJP-Regular.otf',
    },
    image : {
        'rat': './img/rat.png',
        'cheese': './img/cheese.png',
        'cat': './img/cat.png',
    }
};

const SCREEN_WIDTH = 640;
const SCREEN_HEIGHT = 960;

const SPRITE_SIZE  = 160;
const MOVE_X = 200;

const FALL_SPEED_MAX = 1000;
const FALL_SPEED_MIN = 6000;
const FALL_SPEED_ADD = -500;

