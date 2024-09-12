<template>
	<div class="footer-menu">
		<div class="relative" style="width: 100%;">
			<div class="social-media-container">
				<a href="/" rel="nofollow" class="social-media-icon">
					<img src="/images/Subscribe_Us_Img.gif" alt="Subscribe">
				</a>
				<a :href="link_winboxmys + 'winbox-register'" rel="nofollow" class="social-media-icon">
					<img src="/images/Trusted_Site_Img.gif" alt="Trusted">
				</a>
			</div>

			<div v-if="isVisible" class="Btm-Popup_Container">
				<i class="ic-close-circle fas fa-times" @click="closePopup"></i> <!-- Font Awesome cross icon -->
				<a :href="link_winboxmys + 'winbox-register'" rel="nofollow">
					<img src="/images/Btm_Pop_Up_Img.webp" alt="Join Us Now">
				</a>
			</div>

			<div class="footer-content">
				<div class="d-f col">
					<a :href="link_winboxmys" rel="nofollow" target="_blank">
						<img src="/images/Btm_Home_Img.webp" alt="Home">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_winboxmys + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/Btm_History_Img.webp" alt="History">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_winboxmys + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/Btm_Promo_Img.webp" alt="Bonus">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_winboxmys + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/Btm_Lucky_Img.webp" alt="Lucky Draw">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_winboxmys + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/Btm_Live_Img.webp" alt="Live Chat">
					</a>
				</div>
				<div class="d-f col">
					<a :href="link_winboxmys + 'winbox-register'" rel="nofollow" target="_blank">
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
		...mapGetters(['link_winboxmys', 'error']),
	},
	methods: {
		closePopup() {
			this.isVisible = false;
		},
	},
	mounted() {
		this.$store.dispatch('fetchLink_winboxmys');
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
	top: -500%;
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
	width: 45px;
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

.Btm-Popup_Container {
	position: absolute;
	bottom: 55px;
	padding-top: 30px;
}

.Btm-Popup_Container img {
	width: 500px;
}

@media screen and (max-width: 500px) {
	.Btm-Popup_Container img {
		width: 100%;
	}
}

.ic-close-circle {
	display: flex;
	justify-content: center;
	border: 2px solid #fff;
	border-radius: 100%;
	padding: 4px;
	width: 28px;
	height: 28px;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
}

.fa-times::before {
	color: white;
}
</style>
