//headerのリストのスクロールイベント
$("a[href*='#']").on("click",function(){
    let elementID = $(this).attr("href");
    let elementPosition = $(elementID).offset().top;
    $("body,html").animate({
        scrollTop:elementPosition
    },500);
});


$("#about,#works,#blog,#contact").on("click",function () {
    $("body,html").animate({
        scrollTop:0
    },500);
});

//ハンバーガーメニューのイベント
$(".icon").on("click",function () {
    $(".menulist").toggleClass("show");
    $(".bar").toggleClass("is_active");
});

// ページトップボタンの設定
function PageTopAnime() {
    let scroll = $(window).scrollTop();

    if(scroll >= 200){
        $("#page-top").removeClass("down-move");
        $("#page-top").addClass("up-move");
    }else{

        if($("#page-top").hasClass("up-move")){
            $("#page-top").removeClass("up-move");
            $("#page-top").addClass("down-move");
        }
    }
};

$(window).on("scroll",function () {
    PageTopAnime();
});

console.log(scroll);

$(window).on("load",function(){
    PageTopAnime();
})

$("#page-top").click(function(){
    $("body,html").anime({
        scrollTop:0
    },500)
    return false;
});

