<template>
	<div style="margin-bottom: 16px;" id="carouselExampleIntervalRB" class="carousel slide" data-bs-ride="carousel">

		<!-- Indicators -->
		<ol class="carousel-indicators">
			<li data-bs-target="#carouselExampleIntervalRB" data-bs-slide-to="0" class="active"></li>
			<li data-bs-target="#carouselExampleIntervalRB" data-bs-slide-to="1"></li>
		</ol>

		<div class="carousel-inner">
			<div class="carousel-item active" data-bs-interval="4000">
				<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
					<img width="100%" src="/images/ATAS-BAds.webp" class="d-block w-100 br-8 height-208"
						alt="188% Welcome Bonus">
				</a>
			</div>
			<div class="carousel-item" data-bs-interval="4000">
				<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
					<img width="100%" src="/images/bonus50_.webp" class="d-block w-100 br-8 height-208"
						alt="Weekly Check In Bonus">
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
.carousel-indicators {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

.carousel-indicators li {
	width: 10px !important;
	height: 10px !important;
	border-radius: 50% !important;
	background-color: #ccc !important;
}

.carousel-indicators .active {
	width: 12px;
	height: 12px;
	background-color: #fff !important;
}

.br-8 {
	border-radius: 8px;
}
</style>
