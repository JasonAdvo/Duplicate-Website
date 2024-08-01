<template>
	<div>
		<PopUpCard />
	</div>

	<!-- <div>
		<BackToTop />
	</div> -->

	<div>
		<TopBanner />
	</div>

	<div class="running-sentence-container">
		<div class="running-sentence">
			{{ sentence }}
		</div>
	</div>

	<div class="main-content">
		<div class="LeftBanner col-sm-12 col-md-12 col-lg-4 col-xl-3">
			<LeftBanner />
		</div>
		<!-- Middle Blank Column -->

		<div class="Middle_Banner_Container col-sm-12 col-md-12 col-lg-4 col-xl-6">
			<div class="Middle_Inner_Container">
				<div class="site-tabs">
					<div v-for="(image, index) in images" :key="index" :id="'image-container-' + index"
						:class="['image-container', { selected: selectedIndex === index }]"
						@click="selectImage(index); handleRedirect(index)">
						<img :src="selectedIndex === index ? image.selected : image.notSelected"
							:alt="'Image ' + (index + 1)">
					</div>
				</div>

				<div class="MB_Img_Gallery">
					<div class="MB_Img" id="MB_Img">
						<div class="image-grid-container">
							<div class="image-wrapper" v-for="n in 53" :key="n">
								<a v-if="n <= 18" :href="`https://www.atascasinobet.com/sign-up`" rel="nofollow">
									<img :src="`/images/MB_${n}_Img.jpg`" :alt="altTexts[n - 1]">
								</a>
								<img v-else :src="`/images/MB_${n}_Img.jpg`" :alt="altTexts[n - 1]">

								<div v-if="n <= 18">
									<a :href="`https://www.atascasinobet.com/sign-up`" rel="nofollow">
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

				<div class="footer-content">
					<h1>{{ $t('Upper_Content.h1_First_Line') }} | {{ $t('Upper_Content.h1_Second_Line') }}</h1>
					<p><a href="https://www.mamak24.fun/">MAMAK24</a> {{
						$t('Upper_Content.MAMAK24_Description_FH') }} <strong>{{ $t('Upper_Content.MAMAK24_Ewallet')
							}}</strong> {{
								$t('Upper_Content.MAMAK24_Description_SH') }}
					</p>
					<br>
					<h2>{{ $t('H2-MAMAK24-Online-Casino-Games.MAMAK24_Online_Games') }}</h2>
					<p><strong>{{ $t('H2-MAMAK24-Online-Casino-Games.MAMAK24-OG-Main-Word') }}</strong> {{
						$t('H2-MAMAK24-Online-Casino-Games.M24-OG-Description') }}
					</p>
					<h3>{{ $t('H2-MAMAK24-Online-Casino-Games.H3-Live-Casino-Games') }}</h3>
					<p>{{ $t('H2-MAMAK24-Online-Casino-Games.H3-LCG-Description') }}</p>
					<h3>{{ $t('H2-MAMAK24-Online-Casino-Games.H3-Online-Casino-Slots') }}</h3>
					<p><strong>{{ $t('H2-MAMAK24-Online-Casino-Games.H3-OCS-Main-Word') }}</strong> {{
						$t('H2-MAMAK24-Online-Casino-Games.H3-OCS-Description') }}
					</p>
					<h3>{{ $t('H2-MAMAK24-Online-Casino-Games.H3-Sports-Betting') }}</h3>
					<p><strong>{{ $t('H2-MAMAK24-Online-Casino-Games.H3-SB-Main-Word') }}</strong> {{
						$t('H2-MAMAK24-Online-Casino-Games.H3-SB-Description') }}
					</p>
					<h3>{{ $t('H2-MAMAK24-Online-Casino-Games.H3-Online-Lottery') }}</h3>
					<p>{{ $t('H2-MAMAK24-Online-Casino-Games.H3-OL-FH-Description') }} <strong>{{
						$t('H2-MAMAK24-Online-Casino-Games.H3-OL-Main-word') }}</strong> {{
								$t('H2-MAMAK24-Online-Casino-Games.H3-OL-SH-Description') }}
					</p>
					<br>
					<h2>{{ $t('H2-MAMAK24-Payment-Methods.MAMAK24_Payment_Methods') }}</h2>
					<p>{{ $t('H2-MAMAK24-Payment-Methods.M24-PM-Description') }}</p>
					<h3>{{ $t('H2-MAMAK24-Payment-Methods.H3-Bank-Transfer') }}</h3>
					<p>{{ $t('H2-MAMAK24-Payment-Methods.H3-BT-Description') }}</p>
					<h3>{{ $t('H2-MAMAK24-Payment-Methods.H3-Ewallet-Transfer') }}</h3>
					<p><strong>{{ $t('H2-MAMAK24-Payment-Methods.H3-ET-Main-Word') }}</strong> {{
						$t('H2-MAMAK24-Payment-Methods.H3-ET-Description') }}
					</p>
					<br>
					<h2>{{ $t('H2-Join-M24.Join_MAMAK24') }}</h2>
					<p>{{ $t('H2-Join-M24.Join-M24-Description') }}</p>
					<h3>{{ $t('H2-Join-M24.H3-MAMAK24-Register-Online') }}</h3>
					<ol>
						<li>{{ $t('H2-Join-M24.H3-M24-RO-Step-1') }}</li>
						<li>{{ $t('H2-Join-M24.H3-M24-RO-Step-2') }}</li>
						<li>{{ $t('H2-Join-M24.H3-M24-RO-Step-3') }}</li>
						<li>{{ $t('H2-Join-M24.H3-M24-RO-Step-4') }}</li>
						<li>{{ $t('H2-Join-M24.H3-M24-RO-Step-5-FH') }} <strong>{{
							$t('H2-Join-M24.H3-M24-RO-Step-5-Main-Word') }}</strong> {{
									$t('H2-Join-M24.H3-M24-RO-Step-5-SH') }}</li>
					</ol>
					<h3>{{ $t('H2-Join-M24.H3-MAMAK24-Casino-Online') }}</h3>
					<ol>
						<li>{{ $t('H2-Join-M24.H3-M24-CO-Step-1') }}</li>
						<li>{{ $t('H2-Join-M24.H3-M24-CO-Step-2-Description') }} <strong>{{
							$t('H2-Join-M24.H3-M24-CO-Step-2-Main-Word') }}</strong></li>
						<li>{{ $t('H2-Join-M24.H3-M24-CO-Step-3') }}</li>
						<li>{{ $t('H2-Join-M24.H3-M24-CO-Step-4') }}</li>
						<li>{{ $t('H2-Join-M24.H3-M24-CO-Step-5-FH') }} <strong>{{
							$t('H2-Join-M24.H3-M24-CO-Step-5-Main-Word') }}</strong> {{
									$t('H2-Join-M24.H3-M24-CO-Step-5') }}</li>
					</ol>
					<br>
					<h2>{{ $t('H2-MAMAK24-Bonus.MAMAK24_Bonus') }}</h2>
					<p><strong>{{ $t('H2-MAMAK24-Bonus.M24-Bonus-Main-Word') }}</strong> {{
						$t('H2-MAMAK24-Bonus.M24-Bonus-Description') }}
					</p>
					<h3>{{ $t('H2-MAMAK24-Bonus.H3-Advant-Play-Bonus') }}</h3>
					<p>{{ $t('H2-MAMAK24-Bonus.H3-APB-Description') }}</p>
					<h3>{{ $t('H2-MAMAK24-Bonus.H3-50%-Welcome-Bonus') }}</h3>
					<p>{{ $t('H2-MAMAK24-Bonus.H3-WB-Description') }}</p>
					<h3>{{ $t('H2-MAMAK24-Bonus.H3-10%-Unlimited-Bonus') }}</h3>
					<p>{{ $t('H2-MAMAK24-Bonus.H3-UB-Description') }}</p>
					<br>
					<p>{{ $t('MAMAK24-Last-Description.M24_LD') }}</p>
					<br>
					<a href="//www.dmca.com/Protection/Status.aspx?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
						title="DMCA.com Protection Status" class="dmca-badge" rel="nofollow"> <img class="DMCA-width"
							src="https://images.dmca.com/Badges/dmca_protected_sml_120h.png?ID=bd071465-17bf-4b90-b6e5-d51ffeb2271e"
							alt="DMCA.com Protection Status" />
					</a>
					<br>
					<br>
					<p class="b-700">
						{{ $t('content.Learn_More') }}
					</p>
					<p>
						<a href="https://www.atascasinobet.com/"><strong>{{ $t('content.FP_Link_Word') }}</strong></a> |
						{{
							$t('content.FP_Content') }}
					</p>
					<p>
						<a href="https://www.ataskasino.com/"><strong>{{ $t('content.SP_Link_Word') }}</strong></a> | {{
							$t('content.SP_F_Content') }} | {{ $t('content.SP_S_Content') }}
					</p>


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
import PopUpCard from '@/components/PopUpCard.vue';
import BackToTop from '@/components/BackToTop.vue';

export default {
	components: {
		LeftBanner,
		RightBanner,
		TopBanner,
		PopUpCard,
		BackToTop,
	},
	data() {
		return {
			selectedItem: 0,
			sentence: `MAMAK24 Official : Asia's Most Trusted and Reliable Gambling Platform  	Experience the top gambling destination in Malaysia, offering an extensive range of games including live casino, slots, and sportsbooks. MAMAK24 stands out with its exceptional security standards, extensive game selection, and highly responsive customer support. Join us today to enjoy generous welcome and promotional bonuses. Login to your account and immerse yourself in your favorite games for a smooth and rewarding gaming experience.`,
			selectedIndex: 0,
			altTexts: [
				"Ramakien Belssing",
				"Aztec 2",
				"Football Fever",
				"Firefly Hunter",
				"Dark Ritual",
				"Hungry Slime",
				"Crazy Bounty",
				"Dragon Chi’s Quest",
				"Maya Elemental Totem",
				"Xiang Qi Ways 2",
				"Aztec",
				"Last Samurai",
				"Genie Mystery",
				"Disco 777",
				"Boom of Prosperity",
				"World Cop Final",
				"Astro Bunny",
				"Cookie Hunter",
				"Xmas Gift Delight",
				"Mace of Hercules",
				"Wheel of Gems",
				"Scale of Heaven Anubis",
				"Infinity Ocean",
				"DJ Fever",
				"Jewel Mastermind",
				"PUBG 2",
				"Fantastic Beast",
				"Slotto 4D",
				"Xiang Qi Ways",
				"Candy Rush",
				"Fortune God’s Pot",
				"Tiger on Gold",
				"Ancient Gems",
				"Hu Fu Blessing",
				"Battle Heroes",
				"Mine of Prosperity",
				"Eye of RA",
				"Ninja Legend",
				"Treasure of Drake",
				"Immortal Love",
				"Racing for Luck",
				"Treasure Guardian",
				"Fortune’s Warrior",
				"Chronicle of Heroes 3 Warloads",
				"Chronicle of Heroes Lucky Dragon",
				"King of Glory",
				"Bom Bom Bot",
				"Counter Terrorists",
				"Bubble Dragon",
				"Road to UEFA",
				"Bobo Monster",
				"Chronicle of Heroes Divine Tree",
				"Road To Euro"
			],
			images: [
				{ notSelected: '/images/AP_NotS.webp', selected: '/images/AP_S.webp' },
				{ notSelected: '/images/JILI_NotS.webp', selected: '/images/JILI_S.webp' },
				{ notSelected: '/images/RICH_NotS.webp', selected: '/images/RICH_S.webp' },
				{ notSelected: '/images/Bongo_NotS.webp', selected: '/images/Bongo_S.webp' },
				{ notSelected: '/images/Pragmatic_NotS.webp', selected: '/images/Pragmatic_S.webp' },
				{ notSelected: '/images/Playtech_NotS.webp', selected: '/images/Playtech_S.webp' },
				{ notSelected: '/images/AceWin_NotS.webp', selected: '/images/AceWin_S.webp' },
				{ notSelected: '/images/JDB_NotS.webp', selected: '/images/JDB_S.webp' },
				{ notSelected: '/images/Dragoon_NotS.webp', selected: '/images/Dragoon_S.webp' },
				{ notSelected: '/images/Rich88_NotS.webp', selected: '/images/Rich88_S.webp' },
				{ notSelected: '/images/Bigpot_NotS.webp', selected: '/images/Bigpot_S.webp' },
				{ notSelected: '/images/Slot_NotS.webp', selected: '/images/Slot_S.webp' },
				{ notSelected: '/images/Live_NotS.webp', selected: '/images/Live_S.webp' },
				{ notSelected: '/images/Sport_NotS.webp', selected: '/images/Sport_S.webp' },
				{ notSelected: '/images/Other_NotS.webp', selected: '/images/Other_S.webp' },
			],
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
	methods: {
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
				element.scrollIntoView({ behavior: 'smooth' });
			} else {
				console.error(`Element with selector ${selector} not found`);
			}
		},
		// redirectToSignUp() {
		// 	window.location.href = "https://www.atascasinobet.com/sign-up";
		// }
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
	background-image: url('/images/Bg_img.webp');
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
	border-radius: 12px;
	border: 1px solid #fff;
}

@media screen and (max-width: 576px) {
	.MB_Img img {
		width: 33%;
	}
}

.Middle_Inner_Container a {
	padding: 0;
	color: #ffc107;
}

.google-map-link {
	font-style: italic;
	color: #f0d843 !important;
	font-weight: bolder;
	font-size: 12px;
	overflow-wrap: anywhere;
}

.map-container {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 20px 0;
}

.platform {
	color: #f0d843 !important;
}

.running-sentence-container {
	width: 100%;
	overflow: hidden;
	position: relative;
	background-image: url('/images/Running_Banner_BgImg.webp');
	/* visibility: visible; */
	background-size: 100% 100%;
	color: black;
	font-size: 12px;
	letter-spacing: 0.5px;
	height: 25px;
	font-weight: bold;
	display: flex;
	align-items: center;
}

.running-sentence {
	white-space: nowrap;
	/* position: absolute; */
	width: max-content;
	animation: scroll 72s linear infinite;
}

@keyframes scroll {
	0% {
		transform: translateX(75%);
	}

	100% {
		transform: translateX(-100%);
	}
}

.site-tabs {
	display: flex;
	flex-wrap: wrap;
	margin: 10px 0;
}

.image-container {
	width: 6.66%;
	cursor: pointer;
}

.image-container img {
	width: 100%;
}

@media (max-width: 768px) {
	.site-tabs {
		flex-wrap: nowrap;
		overflow-x: auto;
		/* Allow horizontal scrolling */
		-webkit-overflow-scrolling: touch;
		/* Enable smooth scrolling on touch devices */
	}

	.image-container {
		width: 71px;
		/* Fixed width for mobile view */
		flex: 0 0 auto;
		/* Prevent shrinking */
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
}

.image-grid-container {
	display: grid;
	gap: 10px;
}

@media (min-width: 1200px) {
	.image-grid-container {
		grid-template-columns: repeat(6, 1fr);
	}
}

@media (min-width: 768px) and (max-width: 1199px) {
	.image-grid-container {
		grid-template-columns: repeat(4, 1fr);
	}
}

@media (max-width: 767px) {
	.image-grid-container {
		grid-template-columns: repeat(3, 1fr);
	}
}

.image-wrapper img {
	width: 100%;
}

.image-wrapper p {
	border-radius: 30px;
	padding: 3px 0;
	margin-top: 8px;
	width: 100%;
	border: 1px solid #34740e;
	background-color: #4ba614;
	background-image: linear-gradient(to bottom, #4ba614, #008c00);
	text-align: center;
	color: white;
	font-size: 11px;
	margin-bottom: 10px;
}

.image-wrapper p {
	margin-bottom: 0;
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
	color: #ffd700;
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
</style>
