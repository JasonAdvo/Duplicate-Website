<template>
	<div class="relative">
		<div class="Top_Banner_Container" @click="redirectToHome"></div>
		<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/crown99_TB_Img_2.webp"
				alt="A66 Group"></a>
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
				{{ sentence }}
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
		return {
			sentence: `Welcome to Starbucks88 Club MY, Malaysia's premier crypto gambling site! Dive into an exciting world of slots, table games, and live casino action, all powered by secure cryptocurrency transactions. Enjoy exclusive bonuses, fast payouts, and top-notch gaming. Join now and elevate your entertainment with Starbucks88 Club MY!`,
		}
	},
	methods: {
		redirectToHome() {
			this.$router.push('/');
		}
	},
	setup() {
		const { locale } = useI18n();
		const showPopup = ref(false);
		const selectedLanguage = ref('en'); // Default language set to English

		const changeLanguage = (lang) => {
			locale.value = lang;
			selectedLanguage.value = lang;
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
			togglePopup,
			selectedLanguage
		};
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

.relative a {
	position: absolute;
	top: 20px;
	right: 60px;
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
	background-image: url('/images/Running_Bar_Bg_Img.webp');
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
	color: darkblue;
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
