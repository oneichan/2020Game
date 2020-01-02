phina.define('PixelSprite', {
    superClass: 'Sprite',
    
    init: function(image, width, height){
      this.superInit(image, width, height);
    },
    draw: function(canvas){
      canvas.save();                        //canvasの状態をスタックに保存
      canvas.imageSmoothingEnabled = false; //ここがミソ　拡大時の補完を無効に
      this.superMethod('draw', canvas);     //スーパークラスのdrawメソッド呼び出し
      canvas.restore();                     //他に影響が出ないように状態を戻す
    },
  });