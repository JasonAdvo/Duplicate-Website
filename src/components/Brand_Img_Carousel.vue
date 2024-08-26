<template>
	<div id="brandCarousel" class="carousel slide" data-bs-ride="carousel">
		<!-- Indicators -->
		<ol class="carousel-indicators brand-indicators">
			<li data-bs-target="#brandCarousel" data-bs-slide-to="0" class="active"></li>
			<li data-bs-target="#brandCarousel" data-bs-slide-to="1"></li>
			<li data-bs-target="#brandCarousel" data-bs-slide-to="2"></li>
		</ol>

		<!-- Carousel Items -->
		<div class="carousel-inner">
			<div class="carousel-item active" data-bs-interval="4000">
				<a href="https://www.ataskasino1.com/en/sign-up/" rel="nofollow">
					<img src="/images/Brand_Carousel_Img_1.webp" class="d-block w-100" alt="Bonus 388">
				</a>
			</div>
			<div class="carousel-item" data-bs-interval="4000">
				<a href="https://www.ataskasino1.com/en/sign-up/" rel="nofollow">
					<img src="/images/Brand_Carousel_Img_2.webp" class="d-block w-100" alt="Bonus 50">
				</a>
			</div>
			<div class="carousel-item" data-bs-interval="4000">
				<a href="https://www.ataskasino1.com/en/sign-up/" rel="nofollow">
					<img src="/images/Brand_Carousel_Img_3.webp" class="d-block w-100" alt="Bonus 50">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default {
	mounted() {
		const carouselElement = document.querySelector('#brandCarousel');

		if (carouselElement) {
			const bsCarousel = new bootstrap.Carousel(carouselElement);

			carouselElement.addEventListener('slide.bs.carousel', (event) => {
				const indicators = document.querySelectorAll('.carousel-indicators li');

				if (indicators.length > 0) {
					indicators.forEach((indicator, index) => {
						if (index === event.to) {
							indicator.classList.add('active');
						} else {
							indicator.classList.remove('active');
						}
					});
				} else {
					console.warn('Carousel indicators are not found.');
				}
			});
		} else {
			console.warn('Carousel element not found.');
		}

	},
};
</script>

<style>
.brand-indicators {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

.brand-indicators li {
	width: 10px !important;
	height: 10px !important;
	border-radius: 50% !important;
	background-color: #ccc !important;
	cursor: pointer;
}

.brand-indicators .active {
	width: 12px;
	height: 12px;
	background-color: #fff !important;
}
</style>
