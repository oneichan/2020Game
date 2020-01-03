phina.define('ResultScene',{
    superClass: 'DisplayScene',
    init:function(param){
        this.superInit();
        this.backgroundColor = 'floralwhite';


        var self = this;

        var fallItemGroup = DisplayElement().addChildTo(this);
        for (let index = 0; index < param.score; index++) {
            var cheese = PixelSprite('cheese',80,80);
            cheese.addChildTo(fallItemGroup);
            cheese.x = Random.randint(40, SCREEN_WIDTH - 40);
            cheese.y = Random.randint(40, SCREEN_HEIGHT - 40);       
        }

        var titleLabel = Label({
            text:'あけおめ🐁',
            fontFamily:'chihaya',
            fontSize:100,
        });
        titleLabel.addChildTo(this)
        .setPosition(this.gridX.center(),this.gridY.span(5));
        
        var descriptionLabel = Label({
            fontFamily:'noto',
            fontSize: 26,
        });
        descriptionLabel.text = 'チーズ' + param.score + 'こゲット！';
        descriptionLabel.addChildTo(this)
        .setPosition(this.gridX.center(),this.gridY.span(9));
        
        var startButton = AnimateButton({
            text:'たいとる',
            fill:'white',
            stroke:'black',
            fontColor:'black',

        });
        startButton.addChildTo(this)
        .setPosition(this.gridX.center(),this.gridY.span(13));
        startButton.onpush = function(){self.exit();};
        
    }
});