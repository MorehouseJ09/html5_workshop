(function() {
  var Slider,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Slider = (function() {

    Slider.open = false;

    function Slider(element) {
      this.element = element;
      this.init = __bind(this.init, this);

      this.init();
    }

    Slider.prototype.init = function() {
      var _this = this;
      this.slider = this.element.children("div:nth-of-type(1)");
      this.width = this.element.width();
      return this.slider.click(function() {
        if (!_this.open) {
          return _this.element.animate({
            right: 0
          }, 1000, function() {
            return _this.open = true;
          });
        } else {
          return _this.element.animate({
            right: -_this.width
          }, 1000, function() {
            return _this.open = false;
          });
        }
      });
    };

    return Slider;

  })();

  $(document).ready(function() {
    var controller;
    return controller = new Slider($('#slider'));
  });

}).call(this);
