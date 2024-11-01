<template>
	<div class="TopBanner">
		<TopBanner />
	</div>

	<div class="main-content">

		<!-- Top Login & Register Section -->

		<div class="Top_LR_Section">

			<div class="Big_Info_Container">
				<div class="RB_Info_Container" style="display: flex;">
					<div class="RB_Small_Text_Container">
						<div class="Baki">
							<p>{{ $t('message.balance') }} </p>
							<p><strong>RM0.00</strong></p>
						</div>
						<p>{{ $t('message.Min_Deposit') }} <strong>RM1.00</strong></p>
						<p>{{ $t('message.Min_Withdrawal') }} <strong>RM25.00</strong></p>
					</div>
					<div class="RB_Cash_Btn_Container">
						<a :href="link_output + 'winbox-register'" rel="nofollow">
							<img src="/images/RB_Deposit_Img.gif" alt="Deposit">
						</a>
						<a :href="link_output + 'winbox-register'" rel="nofollow">
							<img src="/images/RB_Withdraw_Img.gif" alt="Withdraw">
						</a>
						<a href="/">
							<img src="/images/RB_Refresh_Img.gif" alt="Refresh">
						</a>
					</div>
				</div>

				<div style="display: flex; justify-content: space-between;">
					<a :href="link_output + 'winbox-register'" rel="nofollow"><img src="/images/Turnover Bonus.webp"
							alt="Turnover Bonus" style="width: 95%;">
					</a>

					<a :href="link_output + 'winbox-register'" rel="nofollow" style="text-align: right;"><img
							src="/images/top up rm20.webp" alt="Top Up Rm20" style=" width: 95%;">
					</a>
				</div>
			</div>
		</div>

		<div class="button_grp_container" style="display: none;">
			<div style="position: relative; width: 100%; padding: 0 20px">
				<div class="button-grp">
					<a :href="link_output + 'winbox-register'" rel="nofollow">
						<div class="button_width">
							SHARE
						</div>
					</a>
					<a :href="link_output + 'winbox-register'" rel="nofollow">
						<div class="button_width">
							DOWNLINE CHART
						</div>
					</a>
					<a :href="link_output + 'winbox-register'" rel="nofollow">
						<div class="button_width">
							COPY REFERRAL LINK
						</div>
					</a>
					<a :href="link_output + 'winbox-register'" rel="nofollow">
						<div class="button_width">
							GAME TIPS
						</div>
					</a>
				</div>
			</div>
		</div>

		<!-- Middle Blank Column -->
		<div class="Middle_Banner_Container">
			<div class="Middle_Inner_Container">

				<div style="display: flex">
					<div class="site-tabs_Container"
						style="display: none;justify-content: center; margin-top: 10px; margin-right: 5px;">
						<div class="site-tabs">
							<div v-for="(image, index) in images" :key="index" :id="'image-container-' + index"
								:class="['image-container', { selected: selectedIndex === index }]"
								@click="selectImage(index);">
								<img :src="selectedIndex === index ? image.selected : image.notSelected"
									:alt="image.alt">
								{{ image.alt }}
							</div>
						</div>
					</div>


					<div class="MB_Img_Gallery">
						<div class="MB_Img" id="MB_Img">
							<div class="image-grid-container">
								<div class="image-wrapper" v-for="n in 60" :key="n">
									<div class="MB_IMGs_Wrapper">
										<a v-if="n <= 12" :href="link_output + 'winbox-register'" rel="nofollow">
											<img class="MB_IMGs" :src="`/images/MB_${n}_Img.webp`"
												:alt="altTexts[n - 1]">
										</a>
										<img v-else :src="`/images/MB_${n}_Img.webp`" :alt="altTexts[n - 1]">
									</div>


									<div v-if="n <= 12">
										<a :href="link_output + 'winbox-register'" rel="nofollow">
											<p>{{ $t('message.Play') }}</p>
										</a>
									</div>
									<div v-else>
										<p>{{ $t('message.Play') }}</p>
									</div>
								</div>


							</div>
						</div>
					</div>
				</div>


				<div class="footer-content">

					<a href="//www.dmca.com/Protection/Status.aspx?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
						title="DMCA.com Protection Status" class="dmca-badge" rel="nofollow"> <img class="DMCA-width"
							src="https://images.dmca.com/Badges/dmca_protected_sml_120h.png?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
							alt="DMCA.com Protection Status" />
					</a>
					<br>


					<div class="footer-detail">
						<p>
							<a :href="link_output">
								<b style="font-size: 13px;">
									{{ $t('footer.1') }}
								</b>
							</a> |
							{{ $t('footer.2') }}
						</p>

						<p>
							<a :href="winboxofficial_link">
								<b style="font-size: 13px;">
									{{ $t('footer.3') }}
								</b>
							</a> |
							{{ $t('footer.4') }}
						</p>
						<div class="Visit">
							<p>
								{{ $t('message.Visit') }}
								<a href="/">
									<strong>{{ $t('message.Click') }} {{ $t('message.Website') }}</strong>
								</a>
							</p>
						</div>
						<div class="license">
							<p style="font-weight: 500;">{{ $t('message.Game_Licence') }}</p>
							<img src="/images/Footer-License-Img.webp" alt="Game License">
						</div>
						<div class="game">
							<strong>{{ $t('Registered_TradeMark.Content_1') }}</strong>
							{{ $t('Registered_TradeMark.Content_2') }}
							<strong>{{ $t('Registered_TradeMark.Content_3') }}</strong>
							{{ $t('Registered_TradeMark.Content_4') }}
							<strong>{{ $t('Registered_TradeMark.Content_5') }}</strong>
							{{ $t('Registered_TradeMark.Content_6') }}
						</div>
						<div class="payment">
							<p>{{ $t('message.Payment_Method') }}</p>
							<img src="/images/payment-list.webp" alt="payment-list">
						</div>
						<div class="Certidicate_Security">
							<p style="font-weight: 500;">{{ $t('message.Certidicate_Security') }}</p>
							<img src="/images/Cert-list.webp" alt="certificate-list">
						</div>
						<div class="follow">
							<p style="font-weight: 500;">{{ $t('message.Follow_Us') }}</p>
							<a href="/"><img class="main-pulse" src="/images/facebook.webp" alt="facebook"></a>
							<a href="/"><img class="main-pulse" src="/images/telegram.webp" alt="telegram"></a>
							<a href="/"><img class="main-pulse" src="/images/instagram.webp" alt="instagram"></a>
							<a href="/"><img class="main-pulse" src="/images/youtube.webp" alt="youtube"></a>
							<a href="https://rebrand.ly/wbxseo1pWhatsapp" rel="nofollow"><img class="main-pulse"
									src="/images/whatsapp.webp" alt="whatsapp"></a>
							<a href="/"><img class="main-pulse" src="/images/mail.webp" alt="mail"></a>
						</div>
					</div>
					<div class="copyright">
						Copyright © EPICWIN. All rights reserved.
					</div>
				</div>
			</div>
		</div>




	</div>

	<div class="Bottom_Bar">
		<FooterMenu />
	</div>
</template>

<script>
import { useI18n } from 'vue-i18n'; // Add this import
import RightBanner from '/src/components/Right_Banner.vue';
import TopBanner from '/src/components/Top_Banner.vue';
import FooterMenu from '/src/components/Btm_Menu.vue';

import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
	components: {
		RightBanner,
		TopBanner,
		FooterMenu,
	},
	data() {
		return {
			selectedItem: 0,
			selectedIndex: 0,
			altTexts: [
				"FONG SHEN",
				"Shinibg Stars",
				"SEA WORLD",
				"FORTUNEFEST",
				"Golden Tour",
				"DOLHIN REEF",
				"Tally Ho",
				"RALLY CHAMPIONSHIP",
				"HIGHWAY KINGS",
				"PANTHER MOON",
				"GREAT BLUE",
				"5 FORTUNE",
				"Jin Ping Mai 2",
				"GOLD RUSH",
				"GREEN LIGHT",
				"LCELAND",
				"THAI PARADISE",
				"Cherry Love",
				"Captains Treasure",
				"BOY KING'S TREASURE",
				"Bonus Bears",
				"Jin QianWa",
				"Silent Bullet",
				"God of Wealth",
				"DRAGON HERO",
				"Wild Fireworks",
				"BIG PROSPERITY",
				"SPARTA",
				"DRAGON STRIKE",
				"NIAN NIAN YOU YU",
				"SILENT RUN",
				"DaSiXi",
				"Dolphin",
				"GOLDEN MONKEY",
				"GOLDEN LOTUS",
				"HANZO'S DOJO",
				"SUSHI OISHI",
				"FART GIRL",
				"Celebration of Wealth",
				"WANG CHAY",
				"TRIPLE TWISTER",
				"CLASH OF THE BEASTS",
				"DRAGONZ",
				"NITRO",
				"SUN WU KONG",
				"TEMPLE OF WEALTH",
				"DWARFS GONE WILD",
				"AGENT 51",
				"LION DANCE",
				"ENCHANCED GARDEN",
				"FLOATING DRAGON",
				"IRISH LUCK",
				"STICKY BANDITS",
				"NARCOS",
				"GREAT88",
				"TIGER'S CLORY",
				"CONAN",
				"FORTUNE TIGER",
				"FORTUNE FIREWORKS",
				"MIDAS GOLDEN TOUCH"
			],
			images: [
				{ notSelected: '/images/Hot.webp', selected: '/images/Hot.webp', alt: 'Hot' },
				{ notSelected: '/images/Slot.gif', selected: '/images/Slot.gif', alt: 'Slots' },
				{ notSelected: '/images/Live.webp', selected: '/images/Live.webp', alt: 'Live' },
				{ notSelected: '/images/Fish.webp', selected: '/images/Fish.webp', alt: 'Fishing' },
				{ notSelected: '/images/Poker.webp', selected: '/images/Poker.webp', alt: 'Poker' },
				{ notSelected: '/images/Mini_Game.webp', selected: '/images/Mini_Game.webp', alt: 'Minigame' },
				{ notSelected: '/images/Demo_Play.webp', selected: '/images/Demo_Play.webp', alt: 'Demo Play' },
				{ notSelected: '/images/New.webp', selected: '/images/New.webp', alt: 'News' },
				{ notSelected: '/images/Leaderboard.webp', selected: '/images/Leaderboard.webp', alt: 'Leaderboard' },
			],
			winboxofficial_link: '',
			stickyBarHeightWeb: 120,
			stickyBarHeightMobile: 110,
		};
	},
	setup() {
		const { locale } = useI18n();
		const changeLanguage = (lang) => {
			locale.value = lang;
		};
		return {
			changeLanguage
		};
	},
	computed: {
		...mapGetters(['link_output', 'error']),
	},
	created() {
		const index = this.$route.query.redirectIndex;
		if (index) {
			this.handleRedirect(index);
		}
	},
	watch: {
		'$route.query.redirectIndex'(newIndex) {
			this.handleRedirect(newIndex);
		}
	},
	methods: {
		async fetchLink() {
			try {
				const response_winbox77 = await axios.get("https://seo.mobileapplab.online/api/winbox?fields[0]=winboxofficial_my", {
					headers: {
						"Authorization": "Bearer " + "e2e085a70abb572e2ad3118cf0c3749024fc7342f873874a3cfc95f6520e4f561a3656113097ce0fea85186a91a42c56799bd153626b51f36c83bcf5c02e9996cc56106cb88a85ea4c4d58b4e1713dcc2c5006c666d09110e741081c80562cc29b6490fa8125037afdf61b783ebfd01e41152c0f61803009ad98eded56aa6568"
					}
				});
				this.winboxofficial_link = response_winbox77.data.data.attributes.winboxofficial_my;
			} catch (error) {
				console.log(error)
			}
		},
		selectItem(event, index) {
			this.selectedItem = index;
			const clickedElementId = event.target.id;
			this.scrollToGame(clickedElementId);

			// Remove the active class from all items (assuming you have a way to select them)
			const items = document.querySelectorAll('.Top_Btn'); // Replace '.item' with your actual item selector
			items.forEach(item => {
				item.classList.remove('active');
			});

			// Add the active class to the clicked item
			event.target.classList.add('active');
		},
		scrollToGame(elementId) {
			let sectionId = '';
			if (elementId === 'Slot-Game') {
				sectionId = 'MB_Img';
			} else {
				sectionId = 'Game';
			}

			const sectionElement = document.getElementById(sectionId);
			if (sectionElement) {
				sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		},
		selectImage(index) {
			this.selectedIndex = index;
			this.handleRedirect(index);
		},
		handleRedirect(index) {
			index = Number(index);  // Ensure index is a number

			if (index === 0) {
				this.scrollToElement('.MB_Img_Gallery');
			} else {
				this.scrollToElement('.footer-content');
			}
		},
		scrollToElement(selector) {
			const element = document.querySelector(selector);
			if (element) {
				const isMobile = window.innerWidth <= 768;
				const stickyBarHeight = isMobile ? this.stickyBarHeightMobile : this.stickyBarHeightWeb;
				const elementPosition = element.getBoundingClientRect().top + window.scrollY;
				const offsetPosition = elementPosition - stickyBarHeight;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});
			}
		},
	},
	mounted() {
		this.fetchLink();
		this.$store.dispatch('fetchLink_output');
	}
}
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.Mobile_Middle_Banner {
		display: flex !important;
		flex-direction: column;
		order: 1;
	}

	.RightBanner {
		order: 1;
	}

	.LeftBanner {
		order: 2;
		display: none;
	}

	.Middle_Banner_Container {
		order: 3;
	}

	.MM_Small_Text_Container p {
		font-size: 18px !important;
		color: rgb(2, 47, 138);
	}

	.Big_Info_Container {
		width: 100% !important;
	}

	.MB_Img_Gallery {
		width: 78vw;
	}

	.site-tabs_Container {
		display: flex !important;
	}

	.button_grp_container {
		display: flex !important;
		justify-content: center;
	}
}

@media screen and (max-width: 431px) {
	.MM_Small_Text_Container p {
		font-size: 16px !important;
	}
}

.Top_LR_Section {
	padding: 0 20px;
	display: flex;
	justify-content: space-around;
	margin-top: 20px
}

.Big_Info_Container {
	border-radius: 8px;
	padding: 25px;
	/* background-image: url('/images/Big_Info_Bg_Img.webp'); */
	background-color: rgba(0, 0, 0, .3);
	border: 2px solid #9d00ff;
	/* background-size: 100% 100%; */
	background-position: center;
	width: 50%;
	/* margin: 0 5px; */
}

.RB_Info_Container {
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: bottom;
}

.RB_Cash_Btn_Container {
	width: 50%;
	text-align: right;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 5px;
}

.RB_Cash_Btn_Container img {
	height: 44px;
	width: 130px;
	margin-bottom: 5px;
}

.RB_Small_Text_Container {
	width: 50%;
}

.RB_Small_Text_Container p {
	color: white;
	font-size: 15px;
	font-weight: 400;
	font-family: "Montserrat", sans-serif;
	margin-bottom: 0;
}

.RB_Small_Text_Container strong {
	font-weight: bold !important;
}

.Baki {
	display: flex;
	flex-direction: column;
	margin-bottom: 7px;
}

.Baki p {
	margin: 5px 0;
}

.Baki strong {
	color: #9d00ff;
	font-size: 30px;
}

.button-grp {
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	margin: 8px 0;
}

.button-grp img {
	padding: 0 5px;
}

.button-grp a {
	width: 50%;
	text-decoration: none;
	display: flex;
	justify-content: center;
}

.button_width {
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	border-color: #a403ff;
	background: linear-gradient(180deg, #a500fb 0%, #4e01b3 100%);
	width: 95%;
	margin-bottom: 8px !important;
	border-radius: 8px;
	height: 40px;
	text-align: center;
	font-size: 12px;
}

.main-content {
	display: flex;
	width: 100%;
	background-image: url('/images/Bg_Img.webp');
	background-attachment: fixed;
	background-size: cover;
	background-position: center;
	flex-direction: column;
}

@media (max-width: 768px) {
	.main-content {
		background-size: contain;
		background-repeat: no-repeat;
	}
}

.main-content::before {
	content: '';
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-image: url('/images/Bg_Img.webp');
	background-size: cover;
	background-position: center;
	z-index: -1;
	/* Ensure it stays behind other content */
}

@media (max-width: 768px) {
	.main-content::before {
		background-size: cover;
		background-repeat: no-repeat;
	}
}

.Mobile_Middle_Banner {
	width: 100%;
	background: rgba(0, 0, 0, .3);
	padding: 0 15px 30px;
}

.Mobile_Middle_Banner img {
	width: 100%;
	margin-bottom: 15px;
}

.MM_Login_Register_Btn_Container img {
	width: 50%;
	padding: 0 1px;

}

.MM_Small_Text_Container {
	width: 50%;
}

.RB_Cash_Btn_Container {
	width: 50%;
}

.MM_Small_Text_Container p {
	font-size: 12px;
}

.MM_Small_Btn_Container {
	display: flex;
	flex-wrap: wrap;
}

.MM_Small_Btn_Container img {
	width: 50%;
	margin-bottom: 2px
}

.Middle_Banner_Container {
	padding: 0px 15px 30px;
}

.site-tabs {
	flex-wrap: wrap;
	margin-bottom: 16px;
	position: relative;
	display: flex;
	flex-direction: column;
	width: 20vw;
	gap: 5px;
}

.image-container {
	width: 100%;
	/* padding-bottom: 30px; */
	cursor: pointer;
	background-color: black;
	border: 2px solid #9d00ff;
	border-radius: 16px;
	padding: 4px;
	display: flex;
	align-items: center;
	color: white;
	text-align: center;
	font-size: 12px;
	flex-direction: column;

}

.image-container.selected {
	background: linear-gradient(180deg, #a51aef 0%, #656ac8 100%);
}

.image-container img {
	width: 60px !important;
	margin: 0;
}

.image-container.selected img {
	filter: brightness(100);
}

@media (max-width: 768px) {
	.site-tabs {
		flex-wrap: nowrap;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	.image-container {
		flex: 0 0 auto;
		padding-bottom: 0;
	}

	.site-tabs::-webkit-scrollbar {
		display: none;
		/* Hide scrollbar on WebKit browsers */
	}

	.site-tabs {
		-ms-overflow-style: none;
		/* Hide scrollbar on IE and Edge */
		scrollbar-width: none;
		/* Hide scrollbar on Firefox */
	}

	.site-tabs::before {
		content: none;
	}
}

.MB_Img_Gallery {
	margin: 10px 0px;
	padding: 2vw;
	border: 2px solid #9601e1;
	box-shadow: 0 0 6px #9601e1;
	background: rgba(0, 0, 0, 0.7);
	border-radius: 20px;
}

.MB_Img {
	display: flex;
	flex-wrap: wrap;

}

.Middle_Inner_Container a {
	padding: 0;
	color: #9d00ff;
}

.platform {
	color: #f0d843 !important;
}

.image-grid-container {
	display: grid;
	gap: 10px;
	align-items: center;
}

@media (min-width: 1200px) {
	.image-grid-container {
		grid-template-columns: repeat(6, 1fr);
	}
}

@media (min-width: 768px) and (max-width: 1199px) {
	.image-grid-container {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media (max-width: 767px) {
	.image-grid-container {
		grid-template-columns: repeat(3, 1fr);
	}
}

.MB_IMGs_Wrapper {
	/* height: 200px; */
	width: auto;
	overflow: hidden;
}


.MB_IMGs {
	/* height: 100%; */
	width: auto;
	object-fit: cover;
}

.image-wrapper img {
	width: 100%;
}

.image-wrapper p {
	border-radius: 30px;
	padding: 3px 0;
	margin-top: 8px;
	width: 100%;
	border: 0;
	background-image: linear-gradient(180deg, #a51aef 0%, #656ac8 100%);
	background-color: transparent !important;
	background-size: 100% 100%;
	border: 0;
	text-align: center;
	color: white;
	font-size: 11px;
	margin-bottom: 10px;
	display: none;
}

.image-wrapper p {
	margin-bottom: 0;
	display: none;
}

.image_box {
	height: 90px;
}

.footer-content {
	margin-top: 30px;
	margin-bottom: 60px;
	background-color: rgba(255, 255, 255, 0.8);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 0 5px;
}

.footer-content h1,
h2,
h3,
li,
p {
	color: black;
}

.footer-content h1 {
	font-size: 25px;
	font-weight: 700;
}

.footer-content h2 {
	font-size: 23px;
	font-weight: 700;
}

.footer-content h3 {
	font-size: 18px;
	font-weight: 700;
}

.footer-content p,
li {
	font-size: 16px;
}

.footer-content a {
	font-size: 16px;
	font-weight: 700;
}


.footer-content strong {
	font-weight: 700;
	/* color: #086cec; */
}

.image-wrapper a {
	text-decoration: none;
}

.DMCA-width {
	width: 150px;
}

.b-700 {
	font-weight: 700;
}

.footer-detail {
	width: 90%;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
}

.footer-detail p {
	color: black;
	font-size: 13px;
	margin-top: 30px;
	text-transform: uppercase;
}

.Visit p {
	font-size: 16px;
}

.Visit a {
	animation: blink 0.8s infinite;
}

@keyframes blink {
	50% {
		opacity: 0;
	}
}

.Visit strong {
	color: #9d00ff;
}

.license {
	float: left;
	width: 30%;
}

.license img {
	width: 70%;
	margin-top: 10px;
	float: left;
	margin-right: 10px;
}

.game {
	text-align: left;
	font-size: 14px;
	float: left;
	width: 70%;
	margin-top: 80px;
	color: black;
}

.game img {
	margin-top: 10px;
	width: 100%;
}

@media screen and (max-width: 430px) {
	.game {
		font-size: 12px;
	}
}

.Certidicate_Security {
	text-align: left;
	font-size: 14px;
	float: left;
	width: 100%;
	/* margin-top: 50px; */
	color: black;
}

.Certidicate_Security img {
	margin-top: 10px;
	width: 70%;
}

.payment {
	font-weight: 500;
	float: left;
	width: 100%;
}

.payment img {
	width: 100%;
	display: inline-block;
	margin-bottom: 10px;
}

.certification {
	float: left;
	width: 100%;
}

.certification img {
	width: 100%;
	display: inline-block;
	margin-bottom: 10px;
}

.follow {
	float: left;
	width: 100%;
}

.follow a img {
	width: 32px;
	height: 32px;
	float: left;
	margin-right: 10px;
	margin-top: 10px;
}

@keyframes pulse {
	0% {
		transform: scale(0.8);
	}

	100% {
		transform: scale(1);
	}
}

.main-pulse {
	animation: pulse 1s infinite ease-in-out alternate;
}

.payment P,
.certification p,
.follow p {
	margin-bottom: 0;
}

.copyright {
	text-align: center;
	font-size: 12px;
	padding: 50px 0;
	color: black;
}

.TopBanner {
	position: sticky;
	top: 0;
	z-index: 3;
}

.Bottom_Bar {
	position: sticky;
	bottom: 0;
	z-index: 3;
}
</style>
