<template>
	<div class="footer-menu">
		<div class="relative" style="width: 100%;">
			<div class="social-media-container">
				<a :href="link_output + 'winbox-signup'" rel="nofollow" class="social-media-icon">
					<img src="/images/Save_Link_Img.webp" alt="Save Link">
				</a>

				<a :href="link_output + 'winbox-signup'" rel="nofollow" class="social-media-icon">
					<img src="/images/TWCBET_Img.webp" alt="TWCBET">
				</a>
			</div>

			<div v-if="isVisible" class="Btm-Popup_Container">
				<i class="ic-close-circle fas fa-times" @click="closePopup"></i>
				<a :href="link_output + 'winbox-signup'" rel="nofollow">
					<img src="/images/Btm_Pop_Up_Img.webp" alt="Join Us Now">
				</a>
			</div>

			<div class="footer-content">
				<a :href="link_output" rel="nofollow" target="_blank" class="col home">
					<div class="d-f ">
						<img src="/images/Btm_Home_Img.webp" alt="Home">
						{{ $t('Btm_Section.Home') }}
					</div>
				</a>
				<a :href="link_output + 'winbox-signup'" rel="nofollow" target="_blank" class=" col">
					<div class="d-f">
						<img src="/images/Btm_History_Img.webp" alt="History">
						{{ $t('Btm_Section.History') }}
					</div>
				</a>
				<a :href="link_output + 'winbox-signup'" rel="nofollow" target="_blank" class=" col">
					<div class="d-f">
						<img src="/images/Btm_Promo_Img.webp" alt="Promo">
						{{ $t('Btm_Section.Promo') }}
					</div>
				</a>
				<a :href="link_output + 'winbox-signup'" rel="nofollow" target="_blank" class=" col">
					<div class="d-f">
						<img src="/images/Btm_Live_Img.webp" alt="Live Chat">
						{{ $t('Btm_Section.Live') }}
					</div>
				</a>
				<a :href="link_output + 'winbox-signup'" rel="nofollow" target="_blank" class=" col">
					<div class="d-f">
						<img src="/images/Btm_Setting_Img.webp" alt="Setting">
						{{ $t('Btm_Section.Setting') }}
					</div>
				</a>
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
	background-image: url('/images/Btm_Bg_Img.webp');
	background-size: 100% 100%;
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
	top: -500%;
	right: 0;
}

.social-media-icon {
	margin-bottom: 5px;
}

.social-media-icon img {
	width: 30px;
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
	text-transform: uppercase;
	font-weight: 700;
}

.d-f i {
	font-size: 30px;
	color: #00ef7a;
}

.home {
	background-color: #ad0505;
	box-shadow: 0 5px 15px rgb(215 183 22 / 61%);
	padding: 10px 0;
	margin-top: -10px;
	border-radius: 15px 15px 0 0;
	font-weight: 700;
	color: #ffffff;
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
	text-decoration: none;
}

.col img {
	width: 45px;
	height: auto;
}

@media screen and (max-width:430px) {
	.social-media-container {
		top: -300%;
	}

	.social-media-icon img {
		width: 20px;
	}
}

@media screen and (max-width: 321px) {
	.col img {
		width: 30px;
	}


}

.Btm-Popup_Container {
	position: absolute;
	bottom: 75px;
	padding-top: 30px;
}

.Btm-Popup_Container img {
	width: 600px;
}

@media screen and (max-width:770px) {
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
