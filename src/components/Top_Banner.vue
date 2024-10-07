<template>
	<div class="relative">
		<a href="/">
			<div class="Top_Banner_Container" />
		</a>
		<i class="material-icons GT-icon" @click="togglePopup">g_translate</i>

		<!-- Overlay -->
		<div v-if="showPopup" class="overlay" @click="togglePopup"></div>
		<!-- Pop-up Card -->
		<div v-if="showPopup" class="popup-card">
			<div @click="changeLanguage('en')">
				English
				<span v-if="selectedLanguage === 'en'" class="tick">
					<i class="fa fa-check"></i>
				</span>
			</div>
			<div @click="changeLanguage('ms')">
				Bahasa Melayu
				<span v-if="selectedLanguage === 'ms'" class="tick">
					<i class="fa fa-check"></i>
				</span>
			</div>
			<div @click="changeLanguage('zh')">
				中文
				<span v-if="selectedLanguage === 'zh'" class="tick">
					<i class="fa fa-check"></i>
				</span>
			</div>
		</div>
		<div class="running-sentence-container">
			<div class="running-sentence">
				{{ $t('Runnig_Bar.Content_1') }}|
				{{ $t('Runnig_Bar.Content_2') }}
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
	name: 'TopBanner',
	data() {
		return {}
	},
	methods: {

	},
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
			changeLanguage,
			togglePopup,
			selectedLanguage
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
	.TR_Img {
		max-width: 40px;
	}
}

@media screen and (max-width: 430px) {
	.Top_Banner_Container {
		height: 50px !important;
	}
}

.Top_Banner_Container {
	background-image: url('/images/TB_Bg_Img.webp');
	position: relative;
	background-size: cover;
	/* Adjusted to make the image smaller */
	background-position: 0px 47%;
	background-repeat: round;
	width: 100%;
	height: 80px;
}

@media screen and (min-width:652px) {
	.Top_Banner_Container {
		background-position: 0px 47%;
		background-repeat: no-repeat;
	}
}


.IJaya_Logo {
	position: absolute;
	top: 0px;
	left: 20px;
	width: 240px;
	height: auto;
}

.Partnership {
	position: absolute;
	top: 20px;
	left: 30px;
	width: 60px;
}

.GT-icon {
	position: absolute;
	top: 20px;
	right: 20px;
	z-index: 1;
	font-size: 30px;
	color: white;
	cursor: pointer;
	width: 50px;
}

@media screen and (max-width: 1030px) {
	.IJaya_Logo img {
		width: 200px !important;
	}
}

@media screen and (max-width: 769px) {
	.IJaya_Logo {
		top: 5px;
	}
}

@media screen and (max-width: 430px) {
	.IJaya_Logo {
		width: 150px !important;
	}

	.Partnership {
		top: 5px;
		width: 40px;
	}

	.GT-icon {
		width: 40px;
		top: 5px;
	}
}

@media screen and (max-width: 320px) {
	.IJaya_Logo img {
		width: 145px !important;
	}
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
	background: black;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	z-index: 9999;
	text-align: center;
	width: 300px;
	border: 2px solid #FFC107;
	color: white;
}

.popup-card div {
	display: block;
	padding: 15px;
	border-bottom: 1px solid #FFC107;
	font-size: 18px;
	font-weight: 700;
	cursor: pointer;
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
	background-image: url('/images/Running_Bar_Bg_Img.webp');
	/* visibility: visible; */
	background-size: 100% 100%;
	background-color: black;
	font-size: 12px;
	letter-spacing: 0.5px;
	height: 20px;
	font-weight: bold;
	display: flex;
	align-items: center;
	position: sticky;
}

.running-sentence {
	white-space: nowrap;
	/* position: absolute; */
	width: max-content;
	animation: scroll 90s linear infinite;
	color: #f3c015;
	letter-spacing: 1px;
	font-size: 12px;
}

@keyframes scroll {
	0% {
		transform: translateX(100%);
	}

	100% {
		transform: translateX(-100%);
	}
}

@media (max-width: 1000px) {

	.running-sentence {
		animation: scroll 70s linear infinite;
	}

	/* Adjust this value as needed for your design */
	@keyframes scroll {
		0% {
			transform: translateX(30%);
			/* Different value for mobile view */
		}

		100% {
			transform: translateX(-100%);
			/* Different value for mobile view */
		}
	}
}
</style>