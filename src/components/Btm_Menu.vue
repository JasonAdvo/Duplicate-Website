<template>
	<div class="footer-menu">
		<div class="relative" style="width: 100%;">
			<div class="social-media-container">
				<a :href="link_output + 'winbox-register'" rel="nofollow" class="social-media-icon">
					<img src="/images/Download_Img.webp" alt="Download">
				</a>

				<a :href="link_output + 'winbox-register'" rel="nofollow" class="social-media-icon">
					<img src="/images/Tips_Img.webp" alt="Game Tips">
				</a>
			</div>

			<!-- <div v-if="isVisible" class="Btm-Popup_Container">
				<i class="ic-close-circle fas fa-times" @click="closePopup"></i> 
				<a :href="link_output + 'winbox-register'" rel="nofollow">
					<img src="/images/Btm_Pop_Up_Img.webp" alt="Join Us Now">
				</a>
			</div> -->

			<div class="footer-content">
				<div class="col">
					<a class="d-f" :href="link_output" rel="nofollow" target="_blank">
						<img src="/images/Btm_Home_Img.webp" alt="Home">
						{{ $t('Btm_Section.Home') }}

					</a>
				</div>
				<div class=" col">
					<a class="d-f" :href="link_output + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/Btm_History_Img.webp" alt="History">
						{{ $t('Btm_Section.History') }}
					</a>
				</div>
				<div class=" col">
					<a class="d-f Deposit" :href="link_output + 'winbox-register'" rel="nofollow" target="_blank">
						<i data-v-d3e469a8 class="fa-solid fa-wallet fa-shake"></i>
						{{ $t('Btm_Section.Deposit') }}
					</a>
				</div>
				<div class=" col">
					<a class="d-f" :href="link_output + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/Btm_Promo_Img.webp" alt="Promo">
						{{ $t('Btm_Section.Promo') }}
					</a>
				</div>
				<div class=" col">
					<a class="d-f" :href="link_output + 'winbox-register'" rel="nofollow" target="_blank">
						<img src="/images/Btm_Profile_Img.webp" alt="Setting">
						{{ $t('Btm_Section.Profile') }}
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
		...mapGetters(['link_output', 'error']),
	},
	methods: {
		closePopup() {
			this.isVisible = false;
		},
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
	height: 65px;
	/* background-image: url('/images/Btm_Bg_Img.webp'); */
	/* background-size: 100% 100%; */
	background: linear-gradient(180deg, #160e25 0%, #261a30 100%);
	border-top: 2px solid #9601e1;
	z-index: 3;
}

.relative {
	position: relative;
	z-index: 1;
}

.social-media-container {
	display: flex;
	flex-direction: column;
	position: absolute;
	top: -400%;
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
	flex-direction: column;
	text-decoration: none;
	color: white;
	font-size: 12px;
	align-items: center;
}

.d-f i {
	font-size: 30px;
	color: #00ef7a;
}

.home {
	color: white !important;
}

.Deposit {
	border: 2px solid #00ff57;
	background: linear-gradient(180deg, #4c01b4 0%, #6b10ad 100%);
	border-radius: 50%;
	width: 60px;
	height: 60px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.d-f span {
	color: white !important;
}

.col {
	display: flex;
	justify-content: center;
}

.col img {
	width: 45px;
	height: auto;
}

.social-media-icon img {
	width: 80px;
}

@media screen and (max-width:430px) {
	.social-media-container {
		top: -300%;
	}

	.social-media-icon img {
		width: 60px;
	}
}

@media screen and (max-width: 321px) {
	.col img {
		width: 30px;
	}


}

.Btm-Popup_Container {
	position: absolute;
	bottom: 65px;
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
