<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<LB_Img_Carousel />
			<a :href="link_output + 'winbox-signup'" rel="nofollow"><img src="/images/daily free spin bonus.gif"
					alt="Spin Bonus"></a>



			<div style="position: relative;">
				<img src="/images/LB_Img_2.webp" alt="Share">
				<div class="button-grp">
					<a :href="link_output + 'winbox-signup'" rel="nofollow">
						<div class="button_width Share">
							SHARE
						</div>
					</a>
					<a :href="link_output + 'winbox-signup'" rel="nofollow">
						<div class="button_width Downline">
							DOWNLINE CHART
						</div>
					</a>
					<a :href="link_output + 'winbox-signup'" rel="nofollow">
						<div class="button_width Copy">
							COPY REFERRAL LINK
						</div>
					</a>
					<a :href="link_output + 'winbox-signup'" rel="nofollow">
						<div class="button_width More_Info">
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
	components: {
		LB_Img_Carousel,
	},
	computed: {
		...mapGetters(['link_output', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_output');
	}
};
</script>

<style scoped>
.Left_Banner_Container {
	background: rgba(0, 0, 0, .3);
	padding: 10px 15px 30px 15px;
	height: 100%;
	border-right: 1px solid rgba(255, 255, 255, .5);
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

.button-grp {
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 8px;
	width: 100%;
	bottom: 3%;
}

.button-grp img {
	padding: 0 5px;
}

.button-grp a {
	width: calc(50% - 8px);
	text-decoration: none;
	display: flex;
	justify-content: center;
}

@media screen and (min-width: 610px) and (max-width: 770px) {
	.button-grp a {
		width: calc(50% - 15px);
	}
}

.button_width {
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	/* background: linear-gradient(180deg, #a500fb 0%, #4e01b3 100%); */
	width: 90%;
	margin-bottom: 8px !important;
	border-radius: 10px;
	height: 40px;
	text-align: center;
	font-size: 14px;
	box-shadow: 0 1px 3px rgb(0 0 0 / 50%);
}

.Share {
	background-image: linear-gradient(to bottom, #22492B, #1BD144);
	border: 0;
}

.Downline {
	border-color: #25729a;
	background-color: #3093c7;
	background-image: linear-gradient(to bottom, #3093c7, #1c5a85);
}

.Copy {
	border-color: #C62828;
	background-color: #F44336;
	background-image: linear-gradient(to bottom, #F44336, #B71C1C);
}

.More_Info {
	border-color: #cb9b14;
	background-color: #eab92d;
	background-image: linear-gradient(to bottom, #eab92d, #c79810);
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
		opacity: 0;
	}

	49% {
		opacity: 0;
	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 1;
	}
}

table {
	width: 100%;
	margin-bottom: 16px;
	border: 2px solid black;
}

table td {
	font-size: 9px;
	color: white;
	border: 1px solid #9d00ff;
	font-weight: 700;
	font-family: "Montserrat", sans-serif;
	background-color: black;
}

@media screen and (min-width: 1440px) {
	table td {
		font-size: 11px;
	}
}

.green {
	color: white;
	background-color: black;
	padding-left: 4px;
}

.red {
	color: white;
	background-color: black;
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
