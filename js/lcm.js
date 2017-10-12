/**
 * Created by onlystar on 2016/2/13.
 */
$(window).load(function () {
    $(".status").fadeOut();
    $(".preloader").delay(1000).fadeOut("slow");
});

/*首页图片切换---采用第三方库*/
$.vegas('slideshow', {
    delay: 7000,
    backgrounds: [
        {src: 'image/bg1.jpg', fade: 1000},
        {src: 'image/bg2.jpg', fade: 1000},
        {src: 'image/bg3.jpg', fade: 1000},
        {src: 'image/bg5.jpg', fade: 1000},
        {src: 'image/bg6.jpg', fade: 1000}
    ]
});

/**
 *  导航栏切换
 */
$("#bs-navbar-collapse ul").on("click","li",function () {
    $(this).addClass("current").siblings().removeClass("current");
});

/*canvas绘图*/
drawCircle("#c1", '#E96656', 86);
drawCircle("#c2", '#34D293', 90);
drawCircle("#c3", '#2F6A83', 89);
drawCircle("#c4", '#E7AC44', 95);


function drawCircle(id, color, max) {
    var ctx = $(id).get(0).getContext('2d');
    ctx.beginPath();
    ctx.arc(50, 50, 35, 0, Math.PI * 2);
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 5;
    ctx.stroke();
    //绘制文本
    ctx.fillStyle = '#fff';
    ctx.textBaseline = 'middle';
    ctx.font = '20px SimHei';
    var width=ctx.measureText(max).width;
    ctx.fillText(max,50-width/2,50);

//绘制变色的进度环
    var start = -Math.PI / 2;
    var deg = 0; //进度环前进的角度
    var timer = setInterval(function () {
        ctx.beginPath();  //注意此处！
        deg += 5;
        ctx.arc(50, 50, 35, start, start + deg * Math.PI / 180);
        ctx.strokeStyle = color;
        ctx.stroke();
        if (deg / 360 * 100 > max) {
            clearInterval(timer)
        }
    }, 100);
}
/*模态框单击弹出*/
$(".xhb").click(function(){
    var str = $(this).attr("contact-data");
    var strtwo = $(this).attr("contact-title");
    $(".modal-body").html(str);
    $("#myModalLabel").html(strtwo);
    $("#myModal").modal();
})
