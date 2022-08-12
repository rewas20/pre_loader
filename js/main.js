$(window).on('load',function(){
        $("#preloader").removeClass("preloader");
});

$(".menu").on('click',function(){
    $(".list").toggleClass("showMenu",1000);
     $(".content-header").toggleClass("hideContent",2000);
})

