var squares = [];
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
      squares.push(relPos);
      console.log(squares);
    },

    addSquare: function (pos) {
      this.canvas.append(
        $("<div></div>")
          .addClass("square")
          .css("left", pos.x)
          .css("top", pos.y)
          .css("border-style","solid")
          .css("border-color", "blue")
      )
    },
    hideSquares: function() {
        $('.square').hide();
        },

    reloadSquares: function() {
      $('.square').remove();
      var that = this;
      $.each(squares, function() {
        that.addSquare();
      });
    }
  }

  clicksController.bind(element);

  return clicksController;
};

$(function () {
  // var canvases = $(".canvas");
  // canvases.each(function () {
  //   makeClicksController(this);
  var photo = $("#photo");
  var mcc = makeClicksController(photo);
  $("button#clear").click(mcc.hideSquares);
  $("button#reload").click(mcc.reloadSquares);
});
