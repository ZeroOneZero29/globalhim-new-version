const popularSlider = new Swiper('.swiper', {
	spaceBetween: 32,
	slidesPerView: 1,
  loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		}
	}
});


