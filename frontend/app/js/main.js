import Swiper from 'swiper';
import {
	fadeIn,
	throttle,
	elementFromBottom
} from './functions';

document.addEventListener('DOMContentLoaded', () => {
	console.log('hello earth people');

	// scroll to target on load
	setTimeout(() => {
		if (window.location.hash) {
			window.scrollTo(0, 0);
			const target = document.querySelector(window.location.hash);
			setTimeout(() => {
				scrollToTarget(target);
			}, 100);
		}
	}, 1);

	// scroll to target on on click
	let anchorlinks = document.querySelectorAll('a[href^="#"]')
	for (let item of anchorlinks) {
		item.addEventListener('click', (e) => {
			let hashval = item.getAttribute('href');
			let target = document.querySelector(hashval);
			scrollToTarget(target);
			history.pushState(null, null, hashval);
			e.preventDefault();
		})
	}

	function scrollToTarget(target) {
		const headerOffset = 100;
		const elementPosition = target.getBoundingClientRect().top;
		const offsetPosition = elementPosition - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	}

	// swiper in modal
	const swiperEl = document.querySelector('.swiper-container');
	if (swiperEl) {
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
	}

	const cards = [].slice.call(document.querySelectorAll(".fadein"));
	if (cards) fadeIn(cards, 'show');

	const waves = document.querySelectorAll('.waves path');
	window.addEventListener('scroll', throttle(() => {
		if (waves) elementFromBottom(waves, 'show', 100);
	}, 50), false);

});