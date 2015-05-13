$.fn.extend({
    touchMove:function(fn,status){
        var x, y,startX,startY;
        this[0].addEventListener('touchstart', function(e){
            var touch = e.touches[0];
                startX = touch.screenX;
                startY = touch.screenY;
        }, false);
        this[0].addEventListener("touchmove",function(e){
            var touch = e.touches[0];

            y = touch.screenY - startY;  //上下滑动的距离
            x = touch.screenX - startX;  //左右滑动距离
            //右，并且要右滑动距离大于上下滑动距离。
            if (x > 0 && x > y && x + y > 0) {
                if(status == "right"){
                    fn();
                }
            }
            //左，并且要左滑动距离大于上下滑动距离。
            if (x < 0 && x < y && x + y < 0) {
                if(status == "left"){
                    fn();
                }
            }
        },false);
        return this;
    },
    touchRight:function(fn){
        return this.touchMove(fn,"right");
    },
    touchLeft:function(fn){
        return this.touchMove(fn,"left");
    }
});
