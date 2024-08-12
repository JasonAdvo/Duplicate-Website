<template>
	<div style="padding-top: 10px; margin-bottom: 16px;" id="carouselExampleInterval" class="carousel slide"
		data-bs-ride="carousel">
		<div class="carousel-inner">
			<div class="carousel-item active" data-bs-interval="4000">
				<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
					<img width="100%" src="/images/LB_Sliding_Img_1.webp" class="d-block w-100 max-h" alt="slide1">
				</a>
			</div>
			<div class="carousel-item" data-bs-interval="4000">
				<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
					<img width="100%" src="/images/LB_Sliding_Img_2.webp" class="d-block w-100 max-h" alt="slide2">
				</a>
			</div>
			<div class="carousel-item" data-bs-interval="4000">
				<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
					<img width="100%" src="/images/LB_Sliding_Img_5.webp" class="d-block w-100 max-h" alt="slide3">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default {
	data() {
		return {
			currentIndex: 0,
		};
	},
};
</script>

<style>
.max-h {
	max-height: 150px !important;
}

@media screen and (min-width: 430px) and (max-width: 769px) {
	.max-h {
		max-height: 230px !important;
	}
}
</style>
