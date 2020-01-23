import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	console.log('hello earth people');

	const swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		slidesPerView: 'auto',
		centeredSlides: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});