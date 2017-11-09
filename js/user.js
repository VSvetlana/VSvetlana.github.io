$(document).ready(function () {
	$('#homeBack').slick({
      dots: true,
	  arrows: false,
	  infinite: true,
	  slidesToScroll: 1,
	  autoplay: true,
      fade: true,
	  autoplaySpeed: 2000,
	  cssEase: 'linear',
	});	
	$('#slider').slick({
      dots: false,
	  arrows: true,
	  nextArrow: '<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>',
      prevArrow: '<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>',
	  infinite: false,
	  slidesToShow: 2,
	  slidesToScroll: 2,
        responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
	});	
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
    if ($(window).width() >= '768'){
            $(window).scroll(function() {
                if($(this).scrollTop() < $('#Services').offset().top){
                    $('#header').css("background", "rgba(0,0,0,.0)");
                }else if($('#Services').offset().top <= $(this).scrollTop() + 5){
                    $('#header').css("background", "#555579").css("top", "0");
                    //$('#header a').css("color", "#555579");
                }
            });
    }
    
    
});
