<template>
	<div class="relative">
		<div class="Top_Banner_Container">

			<a href="/">
				<img class="Logo" src="/images/TB_Logo_Img.webp" alt="Logo">
			</a>
			<div style="display: flex; justify-content: flex-end; align-items: center;">

				<div class="login-register-container">
					<a :href="link_output + 'winbox-login'" rel="nofollow">
						<div class="Join">
							LOGIN
						</div>
					</a>
					<a :href="link_output + 'winbox-register'" rel="nofollow">
						<div class="Register">
							REGISTER
						</div>
					</a>
				</div>

				<img class="Partnership" src="/images/Partnership_Img.webp" alt="Partnership">


				<i class="material-icons GT-icon" @click.stop="togglePopup">g_translate</i>


			</div>


		</div>


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
	</div>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { mapGetters } from 'vuex';


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
	computed: {
		...mapGetters(['link_output', 'error']),
	},
	mounted() {
		// Retrieve and apply the stored language setting on component mount
		const savedLanguage = localStorage.getItem('selectedLanguage');
		if (savedLanguage) {
			this.$i18n.locale = savedLanguage;
			this.selectedLanguage = savedLanguage;
		}
		this.$store.dispatch('fetchLink_output');
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
	background-color: black;
	position: relative;
	background-size: cover;
	background-position: 0px 47%;
	background-repeat: no-repeat;
	width: 100%;
	height: 80px;
	border-bottom: 2px solid #9d00ff;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.Partnership {
	margin-left: 10%;
	width: 10%;
	background-color: white;
	border-radius: 8px;
}

.Logo {
	margin-left: 10%;
	width: 80%;
}

.GT-icon {
	z-index: 100;
	font-size: 30px;
	color: white;
	cursor: pointer;
	width: 10%;
	margin: 0 10%;
	position: relative;
}

.login-register-container {
	display: flex;

}

.login-register-container a {
	text-decoration: none;
	margin-left: 10%;

}

.Join,
.Register {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	font-weight: 700;
	width: 100%;
	padding: 8px 16px;

}

@keyframes heartbeat {
	0% {
		transform: scale(1);
	}

	14% {
		transform: scale(1.3);
	}

	28% {
		transform: scale(1);
	}

	42% {
		transform: scale(1.3);
	}

	70% {
		transform: scale(1);
	}
}

.Join {
	color: #ffffff;
	border-color: #a403ff;
	background: linear-gradient(180deg, #a500fb 0%, #4e01b3 100%);
}

.Register {
	color: #2e2e2e;
	background: linear-gradient(180deg, #03fe94 0%, #00b324 100%);
	border-color: #00ff57;
	animation: heartbeat 1.3s ease-in-out infinite;
}

@media screen and (max-width: 430px) {

	.Logo {
		width: 50px;
	}

	.Partnership {
		top: 10px;
		width: 40px;
	}

	.GT-icon {
		width: 40px;
		top: 10px;
	}
}

.TopBanner {
	width: 100%;
}

.TR_Img {
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
	border: 2px solid #9601e1;
	color: white;
}

.popup-card div {
	display: block;
	padding: 15px;
	border-bottom: 1px solid #9601e1;
	font-size: 18px;
	font-weight: 700;
	cursor: pointer;
}

.tick {
	color: #9601e1;
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
	animation: scroll 30s linear infinite;
	color: black;
	letter-spacing: 0.5px;
	font-size: 13px;
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