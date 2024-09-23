<template>
	<div class="footer-menu">
		<div class="relative" style="width: 100%;">
			<div class="social-media-container">
				<a :href="link_winbox + 'winbox-register'" rel="nofollow" class="social-media-icon">
					<img src="/images/Download_App_Img.webp" alt="Download App">
				</a>
				<a :href="link_winbox + 'winbox-register'" rel="nofollow" class="social-media-icon">
					<img src="/images/Subscribe_Us_Img.webp" alt="Subscribe">
				</a>
				<a :href="link_winbox + 'winbox-register'" rel="nofollow" class="social-media-icon">
					<img src="/images/Follow_Us_Img.webp" alt="Follow Us">
				</a>
			</div>

			<div class="footer-content">
				<div class="d-f col">
					<a :href="link_winbox" rel="nofollow" target="_blank">
						<img src="/images/Btm_Home_Img.webp" alt="Home">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_winbox + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/Btm_History_Img.webp" alt="History">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_winbox + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/Btm_Promo_Img.webp" alt="Bonus">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_winbox + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/Btm_Live_Img.webp" alt="Live Chat">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_winbox + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/Btm_Setting_Img.webp" alt="Setting">
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'FooterMenu',
	data() {
		return {
			isVisible: true, // Set this to control visibility
		};
	},
	computed: {
		...mapGetters(['link_winbox', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_winbox');
	},
	methods: {
	},

};
</script>

<style scoped>
.footer-menu {
	display: flex;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 55px;
	background-image: url('/images/Btm_Bg_Img.webp');
	background-size: 100% 100%;
}

.relative {
	position: relative;
	z-index: 1;
}

.social-media-container {
	display: flex;
	flex-direction: column;
	position: absolute;
	top: -700%;
	right: 0;
}

.social-media-icon {
	margin-bottom: 5px;
}

.footer-content {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100%;
}

.d-f {
	display: flex;
	justify-content: center;
}

.col {
	flex: 1;
	text-align: center;
}

.col img {
	width: 60px;
	height: auto;
}

@media screen and (max-width: 321px) {
	.col img {
		width: 30px;
	}
}

.social-media-icon img {
	width: 20px;
	height: 108px;
}
</style>
