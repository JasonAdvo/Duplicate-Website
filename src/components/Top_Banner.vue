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
				<strong>{{ $t('Announce_Bar.Header') }}</strong> - {{ $t('Announce_Bar.Content') }}
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
		const { locale } = useI18n();
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
			togglePopup
		};
	}
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
	background-image: url('/images/TBanner_Img.jpg');
	position: relative;
	background-size: cover;
	background-position: 0 24%;
	background-repeat: no-repeat;
	width: 100%;
	height: 60px;
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
	top: 20px;
	right: 20px;
	z-index: 1;
	color: white;
	cursor: pointer;
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
	background: #000;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	z-index: 9999;
	text-align: center;
	width: 300px;
	border: 1px solid #FFC107;
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

@media screen and (max-width: 430px) {
	.GT-icon {
		top: 14px !important;
	}
}

.running-sentence-container {
	width: 100%;
	overflow: hidden;
	position: relative;
	background-image: url('/images/Running_Banner_BgImg.gif');
	visibility: visible;
	background-size: 100% 100%;
	background-color: black;
	color: #f3c015;
	font-size: 12px;
}

.running-sentence {
	white-space: nowrap;
	/* position: absolute; */
	width: max-content;
	animation: scroll 40s linear infinite;
}

@keyframes scroll {
	0% {
		transform: translateX(75%);
	}

	100% {
		transform: translateX(-100%);
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
</style>
