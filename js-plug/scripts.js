$(document).ready(function () {
    function parallaxIt(e, target, movement, container) {
        var $this = container;
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });
    }

    if($(".main-page").length && window.innerWidth > 1000) {
        $(".main-page").mousemove(function(e) {
            var $this = $(this);
            parallaxIt(e, ".main-decor", -15, $this);
        });
    }
});