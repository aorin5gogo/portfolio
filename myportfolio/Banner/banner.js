// ハンバーガーメニューの設定
$(".icon").on("click",function () {
    $(".menulist").toggleClass("show");
    $(".bar").toggleClass("is_active");
});


// バナーのスライドショー

let imgList = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"
]

imgList.forEach(function (value) {
    $("<li>").html("<img src='" + value + "'>").appendTo(".inner");
});

let index = 1;
$(".inner li:first-child img").addClass("open");

setInterval(function () {
    if (index === $(".inner li").length) {
        $(".inner li:last-child img").removeClass("open");
        index = 1;
        $(".inner li:first-child img").addClass("open");
    } else {
        $(".inner li:nth-child(" + index + ") img").removeClass("open");
        index++;
        $(".inner li:nth-child(" + index + ") img").addClass("open");
    }
}, 8000);



$(".right-arrow").on("click", function () {
    if (index === $(".inner li").length) {
        $(".inner li:last-child img").removeClass("open");
        index = 1;
        $(".inner li:first-child img").addClass("open");
    } else {
        $(".inner li:nth-child(" + index + ") img").removeClass("open");
        index++;
        $(".inner li:nth-child(" + index + ") img").addClass("open");
    }
});


$(".left-arrow").on("click", function () {
    if (index === 1) {
        $(".inner li:first-child img").removeClass("open");
        index = $(".inner li").length;
        $(".inner li:last-child img").addClass("open");
    } else {
        $(".inner li:nth-child(" + index + ") img").removeClass("open");
        index--;
        $(".inner li:nth-child(" + index + ") img").addClass("open");
    }
});


//スライドショーの画像をクリックでその場所に飛ぶ設定

$(".inner li:first-child").on("click",function () {
    
})

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