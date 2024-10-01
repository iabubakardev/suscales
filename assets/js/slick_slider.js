
/***** Blog sidebar *****/

$(document).ready(function(){

	//slider Jquery

	$(".lazy").slick({
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
    });

    $(".fd-tower").slick({
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
    });

    $(".principles-and-corevalues-slider").slick({
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay: false,
        dots: true,
    });

    $(".slider-for").slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		fade: true,
      adaptiveHeight: true,
  		asNavFor: '.slider-nav'
	});

	$(".slider-nav").slick({
  		slidesToShow: 8,
  		slidesToScroll: 1,
  		asNavFor: '.slider-for',
		centerMode: false,
  		focusOnSelect: true
	});

});

$(function() {
  $(".slick-prev").addClass("fa fa-angle-double-left");
  $(".slick-next").addClass("fa fa-angle-double-right");
});
