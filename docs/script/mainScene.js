phina.define('MainScene', {
    superClass: 'DisplayScene',
    countTime: 0,
    waitTime: 1000,

    init: function () {
        this.superInit();
         
        var fallItemGroup = DisplayElement().addChildTo(this);
        var foreGroundGroup = DisplayElement().addChildTo(this);

        var rat = Rat();
        rat.addChildTo(foreGroundGroup)
        .setPosition(this.gridX.center(),this.gridY.center(3));

        var leftButton = ArrowButton(
            {
                direction: DIRECTION.left
            });
        leftButton.addChildTo(foreGroundGroup)
            .setPosition(this.gridX.center(-4), this.gridY.span(14));
        leftButton.onpush = function(){rat.move(DIRECTION.left);};

        var rightButton = ArrowButton(
            {
                direction: DIRECTION.right
            });
        rightButton.addChildTo(foreGroundGroup)
            .setPosition(this.gridX.center(4), this.gridY.span(14));
        rightButton.onpush = function(){rat.move(DIRECTION.right);};

        var scoreLabel = Label('チーズ0こ');
        scoreLabel.addChildTo(foreGroundGroup)
        .setPosition(this.gridX.center(),this.gridY.span(15));

        var posx = this.gridX.center();
        var fallItemPosition = [posx,posx + MOVE_X, posx - MOVE_X];
        var self = this;
        var score = 0;

        // 更新処理
        this.update = function(app){

            if (self.countTime > self.waitTime) {
                self.countTime = 0;

                var rand = Random();

                // 生成物
                var item = null;
                var num = rand.randint(0,39) % 5;
                if (num == 0) {
                    item = Cat();
                }else{
                    item = Cheese();
                }

                // 生成位置
                var num = rand.randint(0,199) % 3;
                item.addChildTo(fallItemGroup)
                    .setPosition(fallItemPosition[num],self.gridY.center(-10));
            }else{
                self.countTime += app.deltaTime;

            }

            fallItemGroup.children.each(function(item){
                if (rat.hitTestElement(item) == false) {
                    return;
                }else {
                    item.remove();
                }
                if (item.tag == Cheese.tag) {
                    score++;
                    scoreLabel.text  = 'チーズ' + score +'こ';
                    return;
                }
                if (item.tag == Cat.tag) {
                    self.exit({score: score});
                    return;
                }

            });
        };

    },
});
phina.define('Rat',{
    moveX: MOVE_X,
    moveY: 0,
    moveSpeed: 50,
    superClass: 'PixelSprite',
    hitObj: null,
    init: function(){
        this.superInit('rat', SPRITE_SIZE, SPRITE_SIZE);        
    },
    move: function(direction){
        var x;
        switch (direction) {
            case DIRECTION.right:
                x = this.moveX;
                break;
            case DIRECTION.left: 
                x = -this.moveX;
                break;
            default:
                break;
        }

        if (this.canMove(SCREEN_WIDTH, x) == false) {
            return;
        }
        this.tweener.moveBy(x,this.moveY,this.moveSpeed).play();
    },
    canMove: function(screenWidth, mx){
        if (this.x + mx > screenWidth) {
            return false;
        }
        if (this.x + mx < 0) {
            return false;
        }

        return true;
    }

});

phina.define('FallItem',{
    superClass: 'PixelSprite',
    tag: 't',
    init: function(img,tag){
        this.superInit(img, SPRITE_SIZE, SPRITE_SIZE);
        this.tweener.moveBy(0,2000, 5000);
        this.tag = tag;

        this.update = function(){
            if(this.y > SCREEN_HEIGHT){
                this.remove();
            }
        };
    },
});

phina.define('Cheese',{
    superClass: 'FallItem',
    init: function(){
        this.superInit('cheese',Cheese.tag);
    },
    _static:{
        tag: 'cheese'
    }
});

phina.define('Cat',{
    superClass: 'FallItem',
    init: function(){
        this.superInit('cat',Cat.tag);
    },
    _static:{
        tag: 'cat'
    }
});

phina.define('ArrowButton', {
    superClass: 'AnimateButton',
    init: function (options) {
        options = (options || {}).$safe(ArrowButton.defaults);
        this.superInit(options);

        // 矢印の追加
        this.fontSize = 70;
        this.fontFamily = 'fontAwesome';
        switch (options.direction) {
            case DIRECTION.top:
                this.text = String.fromCharCode(0xf062);
                break;
            case DIRECTION.bottom:
                this.text = String.fromCharCode(0xf063);
                break;
            case DIRECTION.right:
                this.text = String.fromCharCode(0xf061);
                break;
            case DIRECTION.left:
                this.text = String.fromCharCode(0xf060);
                break;
            default:
                console.log('向きなし');
        }

        // サイズ変更
        this.setSize(120, 120);
    },
    _static: {
        defaults: {
            direction: DIRECTION.none
        },

    },
});