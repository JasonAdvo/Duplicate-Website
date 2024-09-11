<template>
	<div style="padding-top: 10px; margin-bottom: 16px;" id="carouselExampleInterval" class="carousel slide"
		data-bs-ride="carousel">
		<div class="carousel-inner">
			<div class="carousel-item active" data-bs-interval="4000">
				<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
					<img width="100%" src="/images/bonus388.webp" class="d-block w-100" alt="Bonus RM 388">
				</a>
			</div>
			<div class="carousel-item" data-bs-interval="4000">
				<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
					<img width="100%" src="/images/bonus388.webp" class="d-block w-100" alt="Bonus RM 388">
				</a>
			</div>
			<div class="carousel-item" data-bs-interval="4000">
				<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
					<img width="100%" src="/images/bonus388.webp" class="d-block w-100" alt="Bonus RM 388">
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

<style></style>
