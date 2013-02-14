function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  return "rgb(" + [red, green, blue].join(", ") + ")"
}

function makeClicksController (element) {
  var clicksController = {
    canvas: null,

    bind: function (canvas) {
      this.canvas = $(canvas);

      this.canvas.click(this.handleClick.bind(this));
    },

    handleClick: function (event) {
      var relPos = {
        x: event.pageX,
        y: event.pageY
      };

      this.addSquare(relPos);
    },

    addSquare: function (pos) {
      this.canvas.append(
        $("<div></div>")
          .addClass("square")
          .css("left", pos.x)
          .css("top", pos.y)
          .css("background", randomColor())
      )
    }
  };

  clicksController.bind(element);

  return clicksController;
};

$(function () {
  var canvases = $(".canvas");

  canvases.each(function () {
    makeClicksController(this);
  });
});
