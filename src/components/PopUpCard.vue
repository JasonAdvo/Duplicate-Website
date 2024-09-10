<template>
	<div v-if="showAd" class="modal fade show d-block" id="adModal" tabindex="-1" aria-labelledby="adModalLabel"
		aria-hidden="true" style="background: rgba(0,0,0,0.5);" @click.self="closeModal">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content position-relative">
				<div class="modal-body p-0 text-center">
					<a :href="link_atascasinobet + 'sign-up'" rel="nofollow">
						<img src="/images/Mamak24_Popup_Img.png" class="img-fluid" alt="notice">
					</a>
				</div>
			</div>
		</div>
		<button type="button" class="btn-close position-absolute top-0 end-0 m-3" @click="closeModal"
			aria-label="Close"></button>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			showAd: true,
			status: null,
			response: [],
			link_atascasinobet: ''
		};
	},
	methods: {
		closeModal() {
			this.showAd = false;
			document.body.style.overflow = 'auto';
		},
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
		document.body.style.overflow = 'hidden';
		this.fetchLink();
	}
};
</script>

<style scoped>
#adModal .btn-close {
	z-index: 1055;
	color: white;
	/* Make the close button icon white */
	background-color: white;
	/* Ensure the button background is white */
	opacity: 1;
	/* Make sure the button is fully opaque */
}

.adModal .btn-close:hover {
	color: white;
	/* Keep the icon white on hover */
	background-color: white;
	/* Keep the background white on hover */
	opacity: 1;
	/* Ensure it remains opaque */
}

.modal-content {
	background: transparent;
	border: none;
}

.modal-body img {
	width: 100%;
	height: auto;
}

@media screen and (max-width: 430px) {
	.img-fluid {
		max-width: 75%;
	}
}
</style>
