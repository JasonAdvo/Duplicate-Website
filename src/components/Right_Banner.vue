<template>
	<div class="Right_Banner_Container">
		<div class="RB_Imgs">

			<div class="Mobile_View" style="display: none;">
				<RB_Img_Carousel />
				<a :href="link_output + 'winbox-signup'" rel="nofollow"><img style="margin-bottom: 16px;"
						src="/images/daily free spin bonus.gif" alt="Spin Bonus"></a>
			</div>

			<a :href="link_output + 'winbox-signup'" rel="nofollow"><img src="/images/Marc Marquez bonus.webp"
					alt="93% Marc Marquex Bonus" style="margin-bottom: 16px;">
			</a>

			<div class="Big_Info_Container">
				<div class="login-register-container">
					<a :href="link_output + 'winbox-login'" rel="nofollow">
						<img src="/images/RB_Login_Img.webp" alt="Login">
					</a>
					<a :href="link_output + 'winbox-signup'" rel="nofollow">
						<img src="/images/RB_Register_Img.webp" alt="Register">
					</a>
				</div>
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
						<a :href="link_output + 'winbox-signup'" rel="nofollow">
							<img src="/images/RB_Deposit_Img.webp" alt="Deposit">
						</a>
						<a :href="link_output + 'winbox-signup'" rel="nofollow">
							<img src="/images/RB_Withdraw_Img.webp" alt="Withdraw">
						</a>
						<a href="/">
							<img src="/images/RB_Refresh_Img.webp" alt="Refresh">
						</a>
					</div>
				</div>
			</div>

			<div class="sport-betting-container">
				<div class="SB-content-container">
					<div class="team">
						<img src="/images/Tottenham.webp" alt="West Ham">
						<p>{{ $t('message.team_2') }}</p>
					</div>
					<div class="time-info">
						<p>{{ $t('message.start_time') }}</p>
						<p>19 Oct 2024</p>
						<p class="time">19:30</p>
						<a :href="link_output + 'winbox-login'" rel="nofollow">
							<div class="bet-now-container">
								<p>{{ $t('message.bet_now') }}</p>
							</div>
						</a>
					</div>
					<div class="team">
						<img src="/images/West_Ham.webp" alt="Chelsea">
						<p>{{ $t('message.team_1') }}</p>
					</div>
				</div>
				<a :href="link_output + 'winbox-register'" rel="nofollow">
					<div class="show-more-button-container">
						<p>{{ $t('message.show_more') }}</p>
					</div>
				</a>
			</div>

			<div class="Mobile_View" style="display: none;">
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

			<a :href="link_output + 'winbox-signup'" rel="nofollow"><img src="/images/Turnover Bonus.webp"
					alt="Turnover Bonus" style="margin-bottom: 16px;"></a>

			<a :href="link_output + 'winbox-signup'" rel="nofollow"><img src="/images/top up rm20.webp"
					alt="Top Up Rm20" style="margin-bottom: 16px;">
			</a>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import RB_Img_Carousel from './RB_Img_Carousel.vue'
import RB_RW_Img_Carousel from './RB_RW_Img_Carousel.vue';

export default {
	name: 'RightBanner',
	components: {
		RB_Img_Carousel,
		RB_RW_Img_Carousel
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
@media screen and (max-width: 1000px) {
	.Mobile_View {
		display: block !important;
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

.Right_Banner_Container {
	background: rgba(0, 0, 0, .3);
	padding: 10px 15px 0px 15px;
	height: 100%;
	border-left: 1px solid rgba(255, 255, 255, .5);
}

.Big_Info_Container {
	border-radius: 8px;
	padding: 25px;
	background-image: url('/images/Big_Info_Bg_Img.webp');
	/* background-color: rgba(0, 0, 0, .3); */
	/* border: 2px solid #9d00ff; */
	background-size: 100% 100%;
	background-position: center;
	margin-bottom: 16px;
}

@media screen and (max-width: 1000px) {
	.Right_Banner_Container {
		background: unset;
		padding: 15px 15px 0px 15px;
		border-left: unset;
	}

	.login-register-container {
		padding-top: 0px !important;
	}

}

.RB_Imgs img {
	width: 100%;
	margin-bottom: 16px;
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
	/* height: 44px; */
	width: 100%;
	margin-bottom: 5px;
}

.login-register-container {
	display: flex;
	margin-bottom: 16px;
	justify-content: space-between;
}

.login-register-container a {
	width: 49%;
	/* height: 40px; */
	text-decoration: none;
}

.Join,
.Register {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	font-weight: 700;
}

.Join {
	color: #ffffff;
	/* border-color: #a403ff; */
	/* background: linear-gradient(180deg, #a500fb 0%, #4e01b3 100%); */
	background: rgb(75, 0, 127);
}

.Register {
	color: white;
	/* background: linear-gradient(180deg, #03fe94 0%, #00b324 100%); */
	background: rgb(184, 0, 0);
	/* border-color: #00ff57; */
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
	color: #FFC107;
	font-size: 30px;
}

.Tablet-Mobile-view {
	display: none;
}

@media screen and (max-width: 1000px) {
	.Tablet-Mobile-view {
		display: flex !important;
		flex-direction: column;
	}

	.RB_Cash_Btn_Container img {
		width: 80%;
		height: 100%;
	}

	.RB_Cash_Btn_Container a {
		height: 80px;
	}

	.RB_Small_Text_Container {
		justify-content: space-between;
	}

	.RB_Small_Text_Container p {
		font-size: 30px;
	}

	.Baki strong {
		font-size: 40px;
	}
}

@media screen and (max-width: 430px) {
	.RB_Small_Text_Container p {
		font-size: 14px;
	}

	.RB_Cash_Btn_Container a {
		height: 40px;
	}

	.Baki strong {
		font-size: 30px;
	}
}

@media screen and (max-width: 320px) {
	.button_width {
		font-size: 12px
	}
}

.Lucky_Number_Btn {
	position: absolute;
	bottom: 5%;
	left: 8%;
	width: 40% !important;

}

.sport-betting-container {
	background-image: url('/images/soccer-betting-img.jpg');
	/* background-position: center; */
	background-size: cover;
	padding: 20px 0 10px 0;
	margin-bottom: 16px;
	border-radius: 8px;
}

@media screen and (max-width: 430px) {
	.sport-betting-container {
		padding: 30px 0 10px 0 !important;
	}
}

@media screen and (max-width: 769px) {
	.sport-betting-container {
		padding: 50px 0 10px 0;
	}
}

@media screen and (min-width: 1600px) {
	.sport-betting-container {
		padding: 30px 0 10px 0;
	}
}

@media screen and (min-width: 2000px) {
	.sport-betting-container {
		padding: 40px 0 10px 0;
	}
}

.sport-betting-container a {
	text-decoration: none;
}

.SB-content-container {
	overflow: hidden;
	padding: 10px;
	box-shadow: 0 0 3px rgba(0, 0, 0, .6);
	border-radius: 5px;
	background: #fff;
	color: #000;
	font-size: 12px;
	text-align: center;
	margin: 10px;
	display: flex;
	justify-content: space-between;
}

.SB-content-container p {
	margin-bottom: 0;
}

.bet-now-container {
	display: block;
	background: #4caf50;
	color: #fff;
	padding: 8px 0;
	line-height: 1;
	width: 72px;
	text-align: center;
	border-radius: 4px;
	margin: 5px auto 0;
}

.bet-now-container p {
	font-size: 14px;
	font-weight: 700;
}

.show-more-button-container {
	background: #eee;
	color: #000;
	text-align: center;
	padding: 10px;
	border-radius: 5px;
	margin: 0 10px 10px;
	box-shadow: 0 0 3px rgb(0 0 0 / 30%);
	border: 1px solid #ccc;
	cursor: pointer;
}

.show-more-button-container p {
	font-size: 13px;
	font-weight: 700;
	line-height: 1;
	margin-bottom: 0;
}

.team {
	width: 30%;
}

.team p {
	font-weight: 700;
	font-size: 14px;
}

.team img {
	margin-bottom: 10px;
	width: 50px;
}

@font-face {
	font-family: 'Digital-7';
	src: url('@/assets/fonts/digital-7.ttf') format('truetype');
}

.time {
	display: block;
	margin-top: 3px;
	font-size: 21px;
	color: #258D2D;
	font-family: 'Digital-7', sans-serif;
}
</style>