phina.define('GameOverScene',{
    superClass: 'DisplayScene',
    init: function(){
        this.superInit();
        this.backgroundColor = 'gray';

        var self = this;

        var titleLabel = Label({
            text:'ざんねん😱',
            fontFamily:'chihaya',
            fontSize:100,
        });
        titleLabel.addChildTo(this)
        .setPosition(this.gridX.center(),this.gridY.span(5));
        
        var descriptionLabel = Label({
            fontFamily:'noto',
            fontSize: 26,
        });
        descriptionLabel.text = 'ねこにつかまった…';
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