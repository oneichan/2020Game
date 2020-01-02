phina.define('IconShape', {
    superClass: 'phina.display.Label',
  
    init: function(options) {
      if (typeof arguments[0] !== 'object') {
        options = { text: arguments[0] };
      }
      else {
        options = arguments[0];
      }
  
      options = ({}).$safe(options, IconShape.defaults);
  
      this.superInit(options);
  
      // width, heightプロパティをフォントサイズに合わせる
      this.setSize(this.fontSize, this.fontSize);
    },
  
    _accessor: {
      text: {
        get: function()  { return this._text; },
        set: function(v) {
          var iconInt = (typeof v === 'string') ? parseInt(v, 16) : v;
          this._text = String.fromCharCode(iconInt);
          this._lines = (this.text + '').split('\n'); 
        },
      }
    },
  
    _static: {
      defaults: {
        text: 'f024',
        fontSize: 100,
        fontFamily: "FontAwesome",
      },
    },
  });