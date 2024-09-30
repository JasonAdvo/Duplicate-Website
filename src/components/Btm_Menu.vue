<template>
	<div class="footer-menu">
		<div class="relative" style="width: 100%;">
			<div class="social-media-container">
				<a :href="link_output + 'winbox-register'" rel="nofollow" target="_blank" class="social-media-icon">
					<img src="/images/download_side_btn.webp" alt="download">
				</a>
				<a :href="link_output + 'winbox-register'" rel="nofollow" target="_blank" class="social-media-icon">
					<img src="/images/telegram_side_btn.webp" alt="telegram">
				</a>
				<a :href="link_output + 'winbox-register'" rel="nofollow" target="_blank" class="social-media-icon">
					<img src="/images/fb_side_btn.webp" alt="Twitter">
				</a>
			</div>
			<div class="footer-content">
				<div class="d-f col">
					<a :href="link_output" rel="nofollow" target="_blank">
						<img src="/images/M24_BtmB_Home_Img.png" alt="Home">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_output + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/M24_BtmB_History_Img.png" alt="Sign Up">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_output + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/M24_BtmB_Promo_Img.png" alt="Promotion">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_output + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/M24_BtmB_Live_Chat_Img.png" alt="Live Chat">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_output + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/M24_BtmB_Setting_Img.png" alt="Setting">
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
			status: null,
		}
	},
	computed: {
		...mapGetters(['link_output', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_output');
	}
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
	/* background-image: url('/images/Mamak24_Btm_Banner.jpg'); */
	background-color: black;
	background-size: 100% 100%;
	border-top: 2px solid #FF0198;
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

@media screen and (max-width: 426px) {
	.social-media-container {
		top: -700%;
		right: 0;
	}
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
