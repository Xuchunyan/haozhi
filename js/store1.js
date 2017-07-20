/**
 * Created by Administrator on 2017/7/15.
 */
$("#hul>li").hover(function () {
    $(this).find("ol").stop().slideDown()
},function () {
    $(this).find("ol").stop().slideUp()
})
$(".right").hover(function () {
    $(".right-abs").stop().slideDown();
},function () {
    $(".right-abs").stop().slideUp();
})