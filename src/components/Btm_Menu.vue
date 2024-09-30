<template>
	<div class="footer-menu">
		<div class="relative" style="width: 100%;">
			<div class="social-media-container">
				<a :href="output_Link + 'winbox-rigester'" rel="nofollow" class="social-media-icon">
					<img src="/images/Save_Links.webp" alt="Save Links">
				</a>
				<a :href="output_Link + 'winbox-rigester'" rel="nofollow" class="social-media-icon">
					<img src="/images/Berjayasama_Img.webp" alt="Berjayasama Group">
				</a>
			</div>

			<div v-if="isVisible" class="Btm-Popup_Container">
				<i class="ic-close-circle fas fa-times" @click="closePopup"></i> <!-- Font Awesome cross icon -->
				<a :href="output_Link + 'winbox-rigester'" rel="nofollow">
					<img src="/images/Btm_Pop_Up_Img.webp" alt="Join Us Now">
				</a>
			</div>

			<div class="footer-content">
				<div class="col Home_Container">
					<a class="d-f home" :href="output_Link" rel="nofollow" target="_blank">
						<i class="material-icons">home</i>
						{{ $t('Btm_Section.Home') }}
					</a>
				</div>
				<div class=" col">
					<a class="d-f" :href="output_Link + 'winbox-rigester'" rel="nofollow" target="_blank">
						<i class="material-icons">redeem</i>
						{{ $t('Btm_Section.History') }}
					</a>
				</div>
				<div class=" col">
					<a class="d-f" :href="output_Link + 'winbox-rigester'" rel="nofollow" target="_blank">
						<i class="material-icons">redeem</i>
						{{ $t('Btm_Section.Promo') }}
					</a>
				</div>
				<div class=" col">
					<a class="d-f" :href="output_Link + 'winbox-rigester'" rel="nofollow" target="_blank">
						<i class="material-icons">question_answer</i>
						{{ $t('Btm_Section.Live') }}

					</a>
				</div>
				<div class=" col">
					<a class="d-f" :href="output_Link + 'winbox-rigester'" rel="nofollow" target="_blank">
						<i class="material-icons">settings</i>
						{{ $t('Btm_Section.Setting') }}
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
		...mapGetters(['output_Link', 'error']),
	},
	methods: {
		closePopup() {
			this.isVisible = false;
		},
	},
	mounted() {
		this.$store.dispatch('fetchLink_API');
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
	color: black;
	align-items: center;
}

.home {
	color: white !important;
}

.Home_Container {
	background-color: #24be17;
	box-shadow: 0 0px 0px #2bd83e;
	border-radius: 10px 10px 0 0;
}

.d-f span {
	color: white !important;
}

.col {
	flex: 1;
	text-align: center;
	height: 100%;
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
	width: 30px;
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
