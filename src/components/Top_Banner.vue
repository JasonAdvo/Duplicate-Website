<template>
	<div class="relative">
		<div class="Top_Banner_Container" />
		<a href="https://www.atascasinobet.com/sign-up"><img src="/images/crown99_TB_Img_2.webp" alt="A66 Group"></a>
		<i class="material-icons GT-icon" @click="togglePopup">g_translate</i>
		<!-- Overlay -->
		<div v-if="showPopup" class="overlay" @click="togglePopup"></div>
		<!-- Pop-up Card -->
		<div v-if="showPopup" class="popup-card">
			<div @click="changeLanguage('ms')">Bahasa Melayu</div>
			<div @click="changeLanguage('en')">English</div>
			<div @click="changeLanguage('zh')">中文</div>
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

		const changeLanguage = (lang) => {
			locale.value = lang;
			showPopup.value = false; // Hide popup after changing language
			document.body.style.overflow = 'auto';
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
	background-image: url('/images/crown99_topbanner_gif.gif');
	position: relative;
	background-size: cover;
	/* Adjusted to make the image smaller */
	background-position: 0px 40%;
	background-repeat: no-repeat;
	width: 100%;
	height: 80px;
}

.relative a {
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
	top: 28px;
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
</style>
