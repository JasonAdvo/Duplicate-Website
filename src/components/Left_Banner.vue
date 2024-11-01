<template>
	<div class="Left_Banner_Container">

		<a href="/">
			<img style="margin-bottom: 16px;" src="/images/TB_Logo_Img.webp" alt="Logo">
		</a>

		<div class="LB_Imgs">
			<LB_Img_Carousel />
			<a :href="link_output + 'winbox-register'" rel="nofollow"><img src="/images/daily free spin bonus.gif"
					alt="Spin Bonus"></a>

			<div style="display: flex;justify-content: center;">
				<div class="site-tabs">
					<div v-for="(image, index) in images" :key="index" :id="'image-container-' + index"
						:class="['image-container', { selected: selectedIndex === index }]"
						@click="selectImage(index);">
						<img :src="selectedIndex === index ? image.selected : image.notSelected" :alt="image.alt">
						{{ image.alt }}
					</div>
				</div>
			</div>

			<table>
				<thead>
					<tr>
						<td colspan="5" class="title">
							<span>
								LIVE TRANSACTION
							</span>
							<div class="live main-blink-me">
								LIVE
								<span></span>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="2" class="green">
							DEPOSIT
						</td>
						<td colspan="3" class="red">
							WITHDRAW
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>60*******095</td>
						<td class="amount">RM50.00</td>
						<td>60******739</td>
						<td class="amount">RM600.05</td>
						<td>JILI</td>
					</tr>
					<tr>
						<td>60*******399</td>
						<td class="amount">RM10.00</td>
						<td>60******209</td>
						<td class="amount">RM127.09</td>
						<td>KISS918</td>
					</tr>
					<tr>
						<td>60*******874</td>
						<td class="amount">RM5.00</td>
						<td>60******316</td>
						<td class="amount">RM20.09</td>
						<td>JILI</td>
					</tr>
					<tr>
						<td>60*******399</td>
						<td class="amount">RM10.00</td>
						<td>60******453</td>
						<td class="amount">RM127.05</td>
						<td>MEGA888</td>
					</tr>
					<tr>
						<td>60*******110</td>
						<td class="amount">RM50.00</td>
						<td>60******716</td>
						<td class="amount">RM50.00</td>
						<td>JILI</td>
					</tr>
				</tbody>
			</table>

			<div style="position: relative;">
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
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import LB_Img_Carousel from './LB_Img_Carousel.vue'

export default {
	name: 'LeftBanner',
	data() {
		return {
			selectedIndex: 0,
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
		}
	},
	components: {
		LB_Img_Carousel,
	},
	computed: {
		...mapGetters(['link_output', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_output');
	},
	methods: {
		selectImage(index) {
			this.selectedIndex = index;
			this.handleRedirect(index);
		},
	}
};
</script>

<style scoped>
.Left_Banner_Container {
	background: rgba(0, 0, 0);
	padding: 10px 15px 30px 15px;
	height: 100vh;
	border-right: 2px solid #9601e1;
	text-align: center;
	overflow-y: auto;
	overflow-x: hidden;
	position: sticky;
	left: 0;
	top: 0;

	/* Hide scrollbar for Chrome, Safari, and Edge */
	scrollbar-width: none;
	/* Firefox */
	-ms-overflow-style: none;
	/* Internet Explorer 10+ */
}

.Left_Banner_Container::-webkit-scrollbar {
	display: none;
	/* Chrome, Safari, and Opera */
}

.LB_Imgs img {
	width: 100%;
	margin-bottom: 16px;
}

@media screen and (max-width: 1000px) {
	.Left_Banner_Container {
		background: unset;
		padding-bottom: 0px;
		border-right: unset;
		padding-top: 0px;
	}
}

.site-tabs {
	flex-wrap: wrap;
	margin-bottom: 16px;
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
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

.button-grp {
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 8px;
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

.title {
	position: relative;
}

.title span {
	color: white;
	font-weight: 700;
	padding-left: 4px;
	font-family: "Montserrat", sans-serif;
}

.live {
	position: absolute;
	display: flex;
	align-items: center;
	top: 3px;
	right: 3px;
	background: red;
	padding: 1px 3px;
	border-radius: 2px;
	color: #fff;
	font-weight: 400;
	height: 13px;
}

.live span {
	display: block;
	width: 8px;
	height: 8px;
	background: #fff;
	float: right;
	border-radius: 10px;
	margin: 1px 1px 0 3px;
}

.main-blink-me {
	animation: blinkme 1.5s linear infinite;
}

@keyframes blinkme {
	0% {
		display: 1;
	}

	50% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

table {
	width: 100%;
	margin-bottom: 16px;
}

table td {
	font-size: 9px;
	color: white;
	border: 1px solid #9d00ff;
	font-weight: 700;
	font-family: "Montserrat", sans-serif;
	background-color: black;
	text-align: left;
	word-break: break-all;
}

@media screen and (min-width: 1440px) {
	table td {
		font-size: 11px;
	}
}

.green {
	color: black;
	background-image: linear-gradient(180deg, #a51aef 0%, #656ac8 100%);
	padding-left: 4px;
}

.red {
	color: black;
	background-image: linear-gradient(180deg, #a51aef 0%, #656ac8 100%);
	padding-left: 4px;
}

tbody td {
	width: 20%;
	height: 20px;
	padding: 4px;
}

.amount {
	color: #9d00ff;
	text-align: right;

}

.Lucky_Number_Btn {
	position: absolute;
	bottom: 5%;
	left: 8%;
	width: 40% !important;
}
</style>
