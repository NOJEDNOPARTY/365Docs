var common = {
	init: function() {
		common.main();
		common.owl();
		common.typingText();
	},
	main: function(){

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('body').toggleClass('hidden');
			$(this).closest('header').toggleClass('open');
		})

		var bLazy = new Blazy({});

		$('.tabs-section a').click(function(e){
			e.preventDefault();
			if($(this).hasClass('.active') == false) {
				var tabCnt = '.' + $(this).attr('data-cnt');
				$('.tabs-section a.active, .tab-cnt').removeClass('active')
				$(tabCnt).addClass('active')
				$(this).addClass('active');
				var bLazy = new Blazy({});
			}
		});


		jQuery(function($){
			$(document).mouseup(function (e){ 
				var popup = $(".popup");
				if (!popup.is(e.target) 
					&& popup.has(e.target).length === 0) { 
					$('.popup-wrapper').fadeOut('fast');
					$('body').removeClass('hidden');
				}
			});
		});


		$('.owl-carousel').on('changed.owl.carousel', function(event) {
			var bLazy = new Blazy({});
		})

		$('.form-row input').keyup(function(){
			if($(this).val() == '') {
				$(this).closest('.form-row').removeClass('active')
			}else {$(this).closest('.form-row').addClass('active')}
		});

		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			if($(this).attr('data-popup') != 'polyticsPopup'){
				$('.popup-wrapper').removeClass('active');
				$('header').removeClass('open');
				$('body').addClass('hidden');
				$(popup).fadeIn('fast')
				$(popup).find('.work-popup-slider').owlCarousel('destroy');
				setTimeout(function(){
					$(popup).find('.work-popup-slider').owlCarousel({
						items:1,
						margin: 0,
						autoHeight:true,
						lazyLoad: true,
						nav: false,
						dots: true
					});
				}, 200)

			}else {
				$(popup).fadeIn('fast')
				$('header').removeClass('open');
			}

		});

		
		$('.popup-close').click(function(){
			$(this).closest('.popup-wrapper').fadeOut('fast');
			$('body').removeClass('hidden');
		})

		$('.tel-trigger').mask("+7(999) 999-99-99");

		function fixedHead() {
			$('header').addClass('fixed');
			$('body').css({'margin-top':$('header').outerHeight()})
		};

		fixedHead();

		$(window).resize(function() {
			fixedHead();
		});
		
		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 100}, 3000);
			$('.menu-trigger').removeClass('open');
			$('header').removeClass('open');
		});

	},
	owl: function(){
		$('.reviews-slider').owlCarousel({
			loop:true,
			items: 3,
			margin:0,
			nav: true,
			dots: false,
			center: true,
			autoHeight: true,
			responsive:{
				0:{
					items:1,
					center: false
				},
				551:{
					items:3
				},
			}
		})
	},
};

(function() {
	common.init();
}());
