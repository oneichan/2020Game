phina.define('TitleScene',{
    superClass: 'DisplayScene',
    init: function(){
        this.superInit();
        this.backgroundColor = 'floralwhite';

        var self = this;

        var titleLabel = Label({
            text:'2020',
            fontFamily:'chihaya',
            fontSize:200,
        });
        titleLabel.addChildTo(this)
        .setPosition(this.gridX.center(),this.gridY.span(5));
        
        var descriptionLabel = Label({
            fontFamily:'noto',
            fontSize: 26,
        });
        descriptionLabel.text = 'ねずみを左右に動かしてチーズをゲットしよう \r\n ねこに当たるとゲームオーバー';
        descriptionLabel.addChildTo(this)
        .setPosition(this.gridX.center(),this.gridY.span(9));
        
        var startButton = AnimateButton({
            text:'はじめる',
            fill:'white',
            stroke:'black',
            fontColor:'black',

        });
        startButton.addChildTo(this)
        .setPosition(this.gridX.center(),this.gridY.span(13));
        startButton.onpush = function(){self.exit();};
        
    }
});