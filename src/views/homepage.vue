<template>
	<div class="TopBanner">
		<TopBanner />
	</div>

	<div class="main-content">
		<div class="LeftBanner col-sm-12 col-md-12 col-lg-4 col-xl-3">
			<LeftBanner />
		</div>
		<!-- Middle Blank Column -->
		<div class="Middle_Banner_Container col-sm-12 col-md-12 col-lg-4 col-xl-6">
			<div class="Middle_Inner_Container">
				<div style="display: flex; justify-content: center;">
					<div class="site-tabs">
						<div v-for="(image, index) in images" :key="index" :id="'image-container-' + index"
							:class="['image-container', { selected: selectedIndex === index }]"
							@click="selectImage(index); handleRedirect(index)">
							<img :src="selectedIndex === index ? image.selected : image.notSelected" :alt="image.alt">
							{{ siteName[index] }}
						</div>
					</div>
				</div>

				<div class="MB_Img_Gallery">
					<div class="MB_Img" id="MB_Img">
						<div class="image-grid-container">
							<div class="image-wrapper col-lg-3 col-md-3 col-sm-4 col-4" v-for="n in 13" :key="n">
								<a :href="link_winbox + 'winbox-register'" rel="nofollow">
									<div class="inner_container">
										<img :src="`/images/MB_${n}_Img.webp`" :alt="altTexts[n - 1]">
										<p>
											{{ gameNames[n - 1] }}
										</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="footer-content">
					<h1>{{ $t('Main_Content.H1_Header_1') }} | {{ $t('Main_Content.H1_Header_2') }}</h1>
					<br>
					<h2>{{ $t('Main_Content.H2_1_Header') }}</h2>
					<p>{{ $t('Main_Content.H2_1_Content_1') }}</p>
					<p>{{ $t('Main_Content.H2_1_Content_2') }}</p>

					<div class="hide_content" v-if="showContent">

						<h3>{{ $t('Main_Content.H3_1_Header_1') }}</h3>
						<p>{{ $t('Main_Content.H3_1_Content_1') }}</p>
						<h3>{{ $t('Main_Content.H3_1_Header_2') }}</h3>
						<p>{{ $t('Main_Content.H3_1_Content_2') }}</p>
						<h3>{{ $t('Main_Content.H3_1_Header_3') }}</h3>
						<p>{{ $t('Main_Content.H3_1_Content_3') }}</p>
						<br>

						<h2>{{ $t('Main_Content.H2_2_Header') }}</h2>
						<p>{{ $t('Main_Content.H2_2_Content') }}</p>
						<h3>{{ $t('Main_Content.H3_2_Header_1') }}</h3>
						<p>{{ $t('Main_Content.H3_2_Content_1') }}</p>
						<h3>{{ $t('Main_Content.H3_2_Header_2') }}</h3>
						<p>{{ $t('Main_Content.H3_2_Content_2') }}</p>
						<h3>{{ $t('Main_Content.H3_2_Header_3') }}</h3>
						<p>{{ $t('Main_Content.H3_2_Content_3') }}</p>
						<h3>{{ $t('Main_Content.H3_2_Header_4') }}</h3>
						<p>{{ $t('Main_Content.H3_2_Content_4') }}</p>
						<h3>{{ $t('Main_Content.H3_2_Header_5') }}</h3>
						<p>{{ $t('Main_Content.H3_2_Content_5') }}</p>
						<h3>{{ $t('Main_Content.H3_2_Header_6') }}</h3>
						<p>{{ $t('Main_Content.H3_2_Content_6') }}</p>
						<br>

						<h2>{{ $t('Main_Content.H2_3_Header') }}</h2>
						<p>{{ $t('Main_Content.H2_3_Content') }}</p>
						<h3>{{ $t('Main_Content.H3_3_Header_1') }}</h3>
						<p>{{ $t('Main_Content.H3_3_Content_1') }}</p>
						<h3>{{ $t('Main_Content.H3_3_Header_2') }}</h3>
						<p>{{ $t('Main_Content.H3_3_Content_2') }}</p>
						<h3>{{ $t('Main_Content.H3_3_Header_3') }}</h3>
						<p>{{ $t('Main_Content.H3_3_Content_3_1') }}</p>
						<p>{{ $t('Main_Content.H3_3_Content_3_2') }}</p>
						<br>

						<h2>{{ $t('Main_Content.H2_4_Header') }}</h2>
						<h3>{{ $t('Main_Content.H3_4_Header_1') }}</h3>
						<p>{{ $t('Main_Content.H3_4_Content_1') }}</p>
						<h3>{{ $t('Main_Content.H3_4_Header_2') }}</h3>
						<p>{{ $t('Main_Content.H3_4_Content_2') }}</p>
						<h3>{{ $t('Main_Content.H3_4_Header_3') }}</h3>
						<p>{{ $t('Main_Content.H3_4_Content_3') }}</p>
						<p>{{ $t('Main_Content.H2_4_Btm_Content') }}</p>
						<br>

						<h2>{{ $t('Main_Content.Summary_Header') }}</h2>
						<p>{{ $t('Main_Content.Summary_Content_1') }}</p>
						<p>{{ $t('Main_Content.Summary_Content_2') }}</p>
					</div>

					<span class="read-more" @click="toggleContent" v-if="!showContent">{{ $t('Main_Content.Read_More')
						}}</span>
					<span class="read-less" @click="toggleContent" v-else>{{ $t('Main_Content.Read_Less')
						}}</span>

					<div>
						<h2 class="FAQ_Header">{{ $t('FAQs.FAQ_Header') }}</h2>
						<div class="accordion accordion-flush" id="accordionFlushExample">
							<div class="accordion-item">
								<h3 class="accordion-header" id="flush-headingOne">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#flush-collapseOne" aria-expanded="false"
										aria-controls="flush-collapseOne">
										{{ $t('FAQs.FAQ_1_Header') }}
									</button>
								</h3>
								<div id="flush-collapseOne" class="accordion-collapse collapse"
									aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										{{ $t('FAQs.FAQ_1_Content') }}
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h3 class="accordion-header" id="flush-headingTwo">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#flush-collapseTwo" aria-expanded="false"
										aria-controls="flush-collapseTwo">
										{{ $t('FAQs.FAQ_2_Header') }}
									</button>
								</h3>
								<div id="flush-collapseTwo" class="accordion-collapse collapse"
									aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										{{ $t('FAQs.FAQ_2_Content') }}
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h3 class="accordion-header" id="flush-headingThree">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#flush-collapseThree" aria-expanded="false"
										aria-controls="flush-collapseThree">
										{{ $t('FAQs.FAQ_3_Header') }}
									</button>
								</h3>
								<div id="flush-collapseThree" class="accordion-collapse collapse"
									aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										{{ $t('FAQs.FAQ_3_Content') }}
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h3 class="accordion-header" id="flush-headingFour">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#flush-collapseFour" aria-expanded="false"
										aria-controls="flush-collapseFour">
										{{ $t('FAQs.FAQ_4_Header') }}
									</button>
								</h3>
								<div id="flush-collapseFour" class="accordion-collapse collapse"
									aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										{{ $t('FAQs.FAQ_4_Content') }}
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h3 class="accordion-header" id="flush-headingFive">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#flush-collapseFive" aria-expanded="false"
										aria-controls="flush-collapseFive">
										{{ $t('FAQs.FAQ_5_Header') }}
									</button>
								</h3>
								<div id="flush-collapseFive" class="accordion-collapse collapse"
									aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										{{ $t('FAQs.FAQ_5_Content') }}
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h3 class="accordion-header" id="flush-headingSix">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#flush-collapseSix" aria-expanded="false"
										aria-controls="flush-collapseSix">
										{{ $t('FAQs.FAQ_6_Header') }}
									</button>
								</h3>
								<div id="flush-collapseSix" class="accordion-collapse collapse"
									aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										{{ $t('FAQs.FAQ_6_Content') }}
									</div>
								</div>
							</div>
						</div>
					</div>

					<br>
					<br>
					<a href="//www.dmca.com/Protection/Status.aspx?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
						title="DMCA.com Protection Status" class="dmca-badge" rel="nofollow"> <img class="DMCA-width"
							src="https://images.dmca.com/Badges/dmca_protected_sml_120h.png?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
							alt="DMCA.com Protection Status" />
					</a>
					<br>
					<br>
					<div class="b-700">
						<p>
							{{ $t('Main_Content.Btm_Header') }}
						</p>
						<p>
							{{ $t('Main_Content.Btm_Content_1') }} |
							{{ $t('Main_Content.Btm_Content_2') }}
							<a :href="link_winbox"><strong>{{ $t('Main_Content.Btm_Content_3') }}</strong></a>
							{{ $t('Main_Content.Btm_Content_3_5') }}
						</p>
						<p>
							<a :href="winbox77_link">
								<strong>
									{{ $t('Main_Content.Btm_Content_4') }}
								</strong>
							</a> |
							{{ $t('Main_Content.Btm_Content_5') }} |
							{{ $t('Main_Content.Btm_Content_6') }}
						</p>
					</div>

					<div class="footer-detail">
						<div class="Visit">
							<p>
								{{ $t('message.Visit') }}
								<a href="/">
									<strong>{{ $t('message.Click') }} {{ $t('message.Website') }}</strong>
								</a>
							</p>
						</div>
						<div class="license">
							<p>{{ $t('message.Game_Licence') }}</p>
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
							<div class="payment_method_list">
								<img class="PM_Img" src="/images/Bank_Transfer.webp" alt="Bank Transfer">
								<img src="/images/Help_Pay2.webp" alt="Help Pay 2">
								<img src="/images/QR_Pay.webp" alt="QR Pay">
								<img src="/images/Eezie_Pay.webp" alt="Eezie Pay">
								<img src="/images/Fast_Pay.webp" alt="Fast Pay">
								<img src="/images/Doit_Now.webp" alt="Doit Now">
								<img src="/images/Vader_Pay.webp" alt="Vaderpay">
								<img src="/images/World_Pay.webp" alt="World Pay">
							</div>
						</div>
						<div class="certification">
							<p>{{ $t('message.Certidicate_Security') }}</p>
							<div class="certification_list">
								<img src="/images/Secure.webp" alt="Secure SSL Encryption">
								<img src="/images/Cloudflare.webp" alt="CLOUDFLARE">
							</div>
						</div>
						<div class="follow">
							<p>{{ $t('message.Follow_Us') }}</p>
							<a href="/"><img src="/images/FB_Icon.webp" alt="facebook"></a>
							<a href="/"><img src="/images/IG_Icon.webp" alt="instagram"></a>
							<a href="/"><img src="/images/Telegram_Icon.webp" alt="telegram"></a>
						</div>
					</div>
					<div class="copyright">
						Copyright © BP9. All rights reserved.
					</div>
				</div>
			</div>
		</div>

		<!-- Right Banner Column -->
		<div class="RightBanner col-sm-12 col-md-12 col-lg-4 col-xl-3">
			<RightBanner />
		</div>
	</div>
</template>

<script>
import { useI18n } from 'vue-i18n'; // Add this import
import LeftBanner from '/src/components/Left_Banner.vue';
import RightBanner from '/src/components/Right_Banner.vue';
import TopBanner from '/src/components/Top_Banner.vue';
import { mapGetters } from 'vuex';
import axios from 'axios';
import Accordion from '/src/components/Accordion.vue';

export default {
	components: {
		LeftBanner,
		RightBanner,
		TopBanner,
		Accordion
	},
	data() {
		return {
			selectedItem: 0,
			selectedIndex: 0,
			altTexts: [
				"EVOLUTION GAMING",
				"PRAGMATIC PLAY",
				"PLAYTECH",
				"ASIA GAMING",
				"DREAM GAMING",
				"ALLBET",
				"SEXY BACCARAT",
				"EZUGI",
				"SA GAMING",
				"WM CASINO",
				"BIG GAMING",
				"WORLD ENTERTAINMENT",
				"MICRO GAMING PLUS"
			],
			gameNames: [
				"EVOLUTION GAMING",
				"PRAGMATIC PLAY",
				"PLAYTECH",
				"ASIA GAMING",
				"DREAM GAMING",
				"ALLBET",
				"SEXY BACCARAT",
				"EZUGI",
				"SA GAMING",
				"WM CASINO",
				"BIG GAMING",
				"WORLD ENTERTAINMENT",
				"MICRO GAMING PLUS"
			],
			images: [
				{ notSelected: '/images/CASINO_NotS.svg', selected: '/images/CASINO_S.svg', alt: 'Casino' },
				{ notSelected: '/images/SLOTS_NotS.svg', selected: '/images/SLOTS_S.svg', alt: 'Slots' },
				{ notSelected: '/images/FISHIING_NotS.svg', selected: '/images/FISHIING_S.svg', alt: 'Fishing' },
				{ notSelected: '/images/ESPORTS_NotS.svg', selected: '/images/ESPORTS_S.svg', alt: 'E-Sports' },
				{ notSelected: '/images/SPORTS_NotS.svg', selected: '/images/SPORTS_S.svg', alt: 'Sports' },
				{ notSelected: '/images/CRASH_NotS.svg', selected: '/images/CRASH_S.svg', alt: 'Crash Game' },
			],
			siteName: [
				"CASINO",
				"SLOTS",
				"FISHING",
				"ESPORTS",
				"SPORTS",
				"CRASH GAME"
			],
			winbox77_link: '',
			stickyBarHeightWeb: 90,
			stickyBarHeightMobile: 75,
			showContent: false,
			activeAccordion: 0,
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
		...mapGetters(['link_winbox', 'error']),
	},
	methods: {
		async fetchLink() {
			try {
				const response_winbox77 = await axios.get("https://seo.mobileapplab.online/api/winbox?fields[0]=winbox77_my", {
					headers: {
						"Authorization": "Bearer " + "e2e085a70abb572e2ad3118cf0c3749024fc7342f873874a3cfc95f6520e4f561a3656113097ce0fea85186a91a42c56799bd153626b51f36c83bcf5c02e9996cc56106cb88a85ea4c4d58b4e1713dcc2c5006c666d09110e741081c80562cc29b6490fa8125037afdf61b783ebfd01e41152c0f61803009ad98eded56aa6568"
					}
				});
				this.winbox77_link = response_winbox77.data.data.attributes.winbox77_my;
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
		},
		handleRedirect(index) {
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
		toggleContent() {
			this.showContent = !this.showContent; // Toggle the content visibility
		},
		setActiveAccordion(index) {
			console.log(index)
			if (this.activeAccordion === index) {
				console.log(this.activeAccordion)
				this.activeAccordion = null;
			} else {
				this.activeAccordion = index;
			}
		},
	},
	mounted() {
		this.fetchLink();
		this.$store.dispatch('fetchLink_winbox');
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

	.Middle_Banner_Container {
		order: 2;
	}

	.main-content {
		flex-direction: column;
	}

	.MM_Small_Text_Container p {
		font-size: 18px !important;
		color: rgb(2, 47, 138);
	}
}

@media screen and (max-width: 431px) {
	.MM_Small_Text_Container p {
		font-size: 16px !important;
	}
}

.main-content {
	display: flex;
	width: 100%;
	background-image: url('/images/Bg_Img.webp');
	background-attachment: fixed;
	background-size: cover;
	background-position: top;
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

.MB_Img_Gallery {
	margin: 10px 0px;
}

.MB_Img {
	display: flex;
	flex-wrap: wrap;

}

.MB_Img img {
	/* padding: 0 15px 30px; */
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

@media screen and (max-width: 576px) {
	.MB_Img img {
		width: 33%;
	}
}

.Middle_Inner_Container a {
	padding: 0;
	color: #07a6fb;
}

.site-tabs {
	flex-wrap: wrap;
	margin: 10px 0;
	position: relative;
	display: flex;
}

.image-container {
	display: flex;
	align-items: center;
	justify-content: center;
	width: calc(100% / 6);
	cursor: pointer;
	color: white;
	white-space: nowrap;
	font-size: 12px;
	gap: 10px;
	border-radius: 5px;
	padding: 5px 10px;
}

.image-container.selected {
	background-color: #0066C9;
}

.image-container img {
	width: 30%;
}

@media (max-width: 768px) {
	.site-tabs {
		flex-wrap: nowrap;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	.image-container {
		width: 86px;
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

	.image-container.selected {
		border-bottom: 0;
	}
}

.image-grid-container {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
}

.image-wrapper {
	padding: 10px;
	text-align: center;
}

.image-wrapper img {
	width: 50%;
}

.image-wrapper p {
	border-radius: 30px;
	padding: 3px 0;
	margin-top: 8px;
	width: 100%;
	border: 0;
	text-align: center;
	color: white;
	font-size: 11px;
	margin-bottom: 0;
}

.inner_container {
	padding: 10px 5px;
	border-radius: 8px;
	background-color: #283345
}

@media screen and (max-width: 768px) {
	.inner_container {
		min-height: 120px;
	}
}

.footer-content {
	margin-top: 30px;
	margin-bottom: 60px;
}

.footer-content h1,
h2,
h3,
li,
p {
	color: white;
}

.footer-content h1 {
	font-size: 13px;
	font-weight: 700;
}

.footer-content h2 {
	font-size: 12px;
	font-weight: 700;
}

.footer-content h3 {
	font-size: 11px;
	font-weight: 700;
}

.footer-content p,
span {
	font-size: 11px;
}

.b-700 p,
a {
	font-size: 11px;
	font-weight: 700;
}

.b-700 strong {
	font-weight: 700;
	color: #07a6fb;
}

.hide_content {
	display: block;
	/* Ensure the content is block when shown */
}

.read-more,
.read-less {
	cursor: pointer;
	color: white;
	/* Style for read more/less links */
	text-decoration: underline;
}

.FAQ_Header {
	font-size: 12px !important;
	text-align: center;
}

.accordion {
	border-radius: 5px;
	border: 1px solid #ddd;
	/* Optional: Add a border around the accordion */
	overflow: hidden;
	/* Ensure child elements respect the border radius */
}

.accordion-button {
	font-weight: 700;
	font-size: 11px;
}

.accordion-button:focus {
	box-shadow: none;
}


.accordion-body {
	font-size: 12px;
}

.image-wrapper a {
	text-decoration: none;
}

.DMCA-width {
	width: 150px;
}

.footer-detail {
	width: 90%;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
}

.footer-detail p {
	color: #fff;
	font-size: 11px;
	margin-top: 30px;
	text-transform: uppercase;
}

.Visit p {
	font-size: 11px;
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
	color: #07a6fb;
}

.license {
	float: left;
	width: 30%;
}

.license img {
	width: 80%;
	margin-top: 10px;
	float: left;
	margin-right: 10px;
}

.game {
	text-align: left;
	font-size: 11px;
	float: left;
	width: 70%;
	margin-top: 50px;
	color: #fff;
}

@media screen and (max-width: 430px) {
	.game {
		font-size: 8px;
	}
}

.payment {
	float: left;
	width: 100%;
}

.payment_method_list,
.certification_list {
	justify-content: flex-start;
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
	margin-top: 10px;
}

.payment_method_list img,
.certification_list img {
	background: #3b4758;
	border-radius: 5px;
	display: inline;
	height: auto;
	padding: 3px 10px;
	width: 120px;
}

.certification {
	float: left;
	width: 100%;
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
	font-size: 11px;
	padding: 50px 0;
	color: #fff;
}

.TopBanner {
	position: sticky;
	top: 0;
	z-index: 10;
}
</style>
