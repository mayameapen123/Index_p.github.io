
$("video").css("opacity","0.5");


$("video").on("mouseenter",function(){
	$(this).trigger("play");
	$(this).muted = true;
      $(this).autoplay = true;
      $(this).css("opacity","1");
});

$("video").on("mouseleave",function(){
	$(this).muted = true;
	$(this).trigger("pause");
      $(this).autoplay = false;
      $(this).css("opacity","0.5");

});

$(".arrow1").on("click",function(){

location.href='https://mayameapen123.github.io/thesis_site.github.io/';
});

$(".arrow1").mouseenter(function(){

$("img").css("opacity","0.5");
});

$(".arrow1").mouseleave(function(){

$("img").css("opacity","1");
});
