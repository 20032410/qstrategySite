$(document).ready(function(){
    var winWidth = $(window).width();
    var slideheight = $('.slider6 .slide').height();
    console.log(slideheight)
    $('.section1 h2').animate({
        top: slideheight/3
    });
    $('.section1 h3').animate({
        top: slideheight/3+$('.section1 h2').height()
    });
    function resizeLeft(){
        var winWidth = $(window).width();
        var slideheight = $('.slider6 .slide').height();
        var left1 = (winWidth/2) - $('.slider6 h2').width()/2;
        var left2 = (winWidth/2) - $('.slider6 h3').width()/2;
        $('.section1 h2').css('left',left1);
        $('.section1 h2').css('top',slideheight/3);
        $('.section1 h3').css('left',left2);
        $('.section1 h3').css('top',slideheight/3+$('.section1 h2').height());
    }
    resizeLeft();
    $(window).resize(function () {
        resizeLeft();
    });
    $('.slider6').bxSlider({
        mode: 'fade',
        slideWidth: winWidth,
        slideMargin: 10
    });
});