<template>
	<div style="padding-top: 10px; margin-bottom: 16px;" id="carouselExampleInterval" class="carousel slide"
		data-bs-ride="carousel">
		<div class="carousel-inner">
			<div class="carousel-item active" data-bs-interval="4000">
				<a :href="link_atascasinobet + 'sign-up'" rel="nofollow">
					<img width="100%" src="/images/LB_Slider_Img_1.jpg" class="d-block w-100" alt="slide1">
				</a>
			</div>
			<div class="carousel-item" data-bs-interval="4000">
				<a :href="link_atascasinobet + 'sign-up'" rel="nofollow">
					<img width="100%" src="/images/LB_Slider_Img_2.jpg" class="d-block w-100" alt="slide2">
				</a>
			</div>
			<div class="carousel-item" data-bs-interval="4000">
				<a :href="link_atascasinobet + 'sign-up'" rel="nofollow">
					<img width="100%" src="/images/LB_Slider_Img_3.webp" class="d-block w-100" alt="slide3">
				</a>

			</div>
		</div>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import 'bootstrap';

export default {
	data() {
		return {
			currentIndex: 0,
			status: null,
			response: [],
			link_atascasinobet: ''
		};
	},
	methods: {
		async fetchLink() {
			try {
				const response = await axios.get("https://seo.mobileapplab.online/api/atas?fields[0]=atascasinobet_com", {
					headers: {
						"Authorization": "Bearer " + "1c4db3188ab2e9a077928920d9cc8d3322d15f9751bc2054a5cb70008df79cf3e3a4dd005a75a1f2db40eb953292ee10ef699693e96e9d77a98439f438ee6a6e6805a8a955e992f082b9e6118a4345e1ed18438ff9789edf9ed1dd58af45ee6669a7519a1291746959ff45bc2054b7f408b5da5ea8cd04d588a2704b7e218021"
					}
				});

				// this.status = response.status;
				// console.log(this.status)
				// this.response = response;
				// console.log(this.response)
				this.link_atascasinobet = response.data.data.attributes.atascasinobet_com;
				// console.log(this.link_atascasinobet)
			} catch (error) {
				console.log(error)
			}
		},
	},
	mounted() {
		this.fetchLink();
	}
};
</script>

<style>
.carousel-item img {
	height: 148px;
	border-radius: 20px;
}
</style>
