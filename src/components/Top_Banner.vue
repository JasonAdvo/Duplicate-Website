<template>
	<div class="relative">
		<div class="Top_Banner_Container">
			<a href="/"></a>
		</div>
		<a class="A66-Grp" href="/"><img src="/images/crown99_TB_Img_2.webp" alt="A66 Group"></a>
		<i class="material-icons GT-icon" @click="togglePopup">g_translate</i>
		<!-- Overlay -->
		<div v-if="showPopup" class="overlay" @click="togglePopup"></div>
		<!-- Pop-up Card -->
		<div v-if="showPopup" class="popup-card">
			<div>
				<span @click="changeLanguage('en')" class="changeLanguage" role="button">
					English
					<span v-if="selectedLanguage === 'en'" class="tick">
						<i class="fa fa-check"></i>
					</span>
				</span>
			</div>
			<div>
				<span @click="changeLanguage('ms')" class="changeLanguage" role="button">
					Bahasa Melayu
					<span v-if="selectedLanguage === 'ms'" class="tick">
						<i class="fa fa-check"></i>
					</span>
				</span>
			</div>
			<div>
				<span @click="changeLanguage('zh')" class="changeLanguage" role="button">
					中文
					<span v-if="selectedLanguage === 'zh'" class="tick">
						<i class="fa fa-check"></i>
					</span>
				</span>
			</div>
		</div>

		<div class="running-sentence-container">
			<div class="running-sentence">
				{{ $t('content.Game_License_Content') }}
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
	name: 'TopBanner',
	setup() {
		const { locale } = useI18n(); // Destructure locale from Vue I18n

		const showPopup = ref(false);
		const selectedLanguage = ref(localStorage.getItem('selectedLanguage') || 'en');

		const changeLanguage = (lang) => {
			// Save the selected language to localStorage
			localStorage.setItem('selectedLanguage', lang);

			// Update Vue I18n locale
			locale.value = lang;

			// Hide popup and reset body overflow
			showPopup.value = false;
			document.body.style.overflow = 'auto';

			// Optionally, reload the page
			location.reload();
		};

		const togglePopup = () => {
			showPopup.value = !showPopup.value;

			if (showPopup.value) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}
		};

		return {
			showPopup,
			selectedLanguage,
			changeLanguage,
			togglePopup
		};
	},
	mounted() {
		// Retrieve and apply the stored language setting on component mount
		const savedLanguage = localStorage.getItem('selectedLanguage');
		if (savedLanguage) {
			this.$i18n.locale = savedLanguage;
			this.selectedLanguage = savedLanguage;
		}
	},
};
</script>

<style scoped>
@media screen and (max-width: 767px) {
	.Top_Banner_Container {
		height: 50px !important;
	}

	.TR_Img {
		max-width: 40px;
	}
}

.Top_Banner_Container {
	background-image: url('/images/TB_Img.webp');
	position: relative;
	background-size: cover;
	/* Adjusted to make the image smaller */
	background-position: 0px 47%;
	background-repeat: no-repeat;
	width: 100%;
	height: 80px;
}

.Top_Banner_Container a {
	display: flex;
	width: 100%;
	height: 100%;
}

.A66-Grp {
	position: absolute;
	top: 20px;
	left: 20px;
}

@media screen and (max-width: 430px) {
	.relative a {
		top: 6px
	}
}

.relative img {
	width: 60px;
	height: 40px;
}

.TopBanner {
	width: 100%;
}

.TR_Img {
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
	max-width: 60px;
}

.GT-icon {
	position: absolute;
	top: 24px;
	right: 20px;
	z-index: 1;
	color: black;
	cursor: pointer;
	font-size: 30px;
}

.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 9998;
}

.popup-card {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: white;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	z-index: 9999;
	text-align: center;
	width: 300px;
	border: 1px solid #FFC107;
	color: black;
}

.popup-card div {
	display: block;
	padding: 15px;
	border-bottom: 1px solid #FFC107;
	font-size: 18px;
	font-weight: 700;
	cursor: pointer;
}

.changeLanguage {
	color: black;
	text-decoration: none;
}

@media screen and (max-width: 430px) {
	.GT-icon {
		top: 14px !important;
	}
}

.tick {
	color: #FFC107;
}

.tick i {
	font-size: 18px;
}

.fa-check::before {
	content: "\f00c";
}

.running-sentence-container {
	width: 100%;
	overflow: hidden;
	position: relative;
	background-image: url('/images/RunningB_Img.webp');
	/* visibility: visible; */
	background-size: 100% 100%;
	color: black;
	font-size: 12px;
	letter-spacing: 0.5px;
	height: 25px;
	font-weight: bold;
	display: flex;
	align-items: center;
	position: sticky;
}

.running-sentence {
	white-space: nowrap;
	/* position: absolute; */
	width: max-content;
	animation: scroll 72s linear infinite;
	color: white;
}

@keyframes scroll {
	0% {
		transform: translateX(60%);
	}

	100% {
		transform: translateX(-100%);
	}
}
</style>
