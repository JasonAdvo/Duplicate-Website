<template>
	<div style="margin-bottom: 16px;" id="carouselExampleIntervalLB" class="carousel slide" data-bs-ride="carousel">

		<!-- Indicators -->
		<ol class="carousel-indicators">
			<li data-bs-target="#carouselExampleIntervalLB" data-bs-slide-to="0" class="active"></li>
			<li data-bs-target="#carouselExampleIntervalLB" data-bs-slide-to="1"></li>
		</ol>

		<div class="carousel-inner">
			<div class="carousel-item active" data-bs-interval="4000">
				<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
					<img width="100%" src="/images/bonus388.webp" class="d-block w-100 br-8" alt="Bonus888">
				</a>
			</div>
			<div class="carousel-item" data-bs-interval="4000">
				<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
					<img width="100%" src="/images/Percuma RM 50.webp" class="d-block w-100 br-8" alt="Percuma RM 50">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			currentIndex: 0,
			status: null,
			response: [],
		};
	},
	computed: {
		...mapGetters(['link_ataskasino', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_ataskasino');
	}
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
