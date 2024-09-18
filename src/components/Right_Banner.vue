<template>
	<div class="Right_Banner_Container">

		<div class="Mobile_View" style="display: none;">
			<RB_Img_Carousel />
			<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"><img style="width: 100%; margin-bottom: 16px"
					src="/images/daily free spin bonus.gif" alt="Spin Bonus">
			</a>
		</div>

		<div class="RB_Imgs">
			<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"><img src="/images/Bonus93.gif"
					alt="93% Marc Marquex Bonus" style="margin-bottom: 16px;">
			</a>

			<div class="login-register-container">
				<a :href="link_winboxmys + 'winbox-login'" rel="nofollow"><img class="Join"
						src="/images/RB_Login_Img.webp" alt="Login"></a>
				<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"><img class="Register"
						src="/images/RB_Register_Img.webp" alt="Register"></a>
			</div>
			<div class="RB_Info_Container" style="display: flex; margin-bottom: 23px">
				<div class="RB_Small_Text_Container">
					<div class="Baki">
						<p>{{ $t('message.balance') }} </p>
						<p><strong>0.00</strong></p>
					</div>
					<p>{{ $t('message.Min_Deposit') }} <strong>RM5.00</strong></p>
					<p>{{ $t('message.Min_Withdrawal') }} <strong>RM50.00</strong></p>
				</div>
				<div class="RB_Cash_Btn_Container">
					<a :href="link_winboxmys + 'winbox-register'" rel="nofollow">
						<img src="/images/RB_Deposit_Img.webp" alt="Deposit">
					</a>
					<a :href="link_winboxmys + 'winbox-register'" rel="nofollow">
						<img src="/images/RB_Withdraw_Img.webp" alt="Withdraw">
					</a>
					<a href="/">
						<img src="/images/RB_Refresh_Img.webp" alt="Refresh">
					</a>
				</div>
			</div>

			<div class="Mobile_View" style="display: none;">
				<div class="Share_Section">
					<img src="/images/LB_Img_2.webp" alt="Share">
					<div class="button-grp">
						<!-- Blank containers with links inside -->
						<div class="button-container">
							<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"></a>
						</div>
						<div class="button-container">
							<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"></a>
						</div>
						<div class="button-container">
							<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"></a>
						</div>
						<div class="button-container">
							<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"></a>
						</div>
					</div>
				</div>

				<div>
					<RB_RW_Img_Carousel />
				</div>
			</div>

			<div class="sport-betting-container">
				<div class="SB-content-container">
					<div class="team">
						<img src="/images/West_Ham.webp" alt="West Ham">
						<p>{{ $t('message.team_1') }}</p>
					</div>
					<div class="time-info">
						<p>{{ $t('message.start_time') }}</p>
						<p>21 Sep 2024</p>
						<p class="time">19:30</p>
						<a :href="link_winboxmys + 'winbox-login'" rel="nofollow">
							<div class="bet-now-container">
								<p>{{ $t('message.bet_now') }}</p>
							</div>
						</a>
					</div>
					<div class="team">
						<img src="/images/Chelsea.webp" alt="Chelsea">
						<p>{{ $t('message.team_2') }}</p>
					</div>
				</div>
				<a :href="link_winboxmys + 'winbox-register'" rel="nofollow">
					<div class="show-more-button-container">
						<p>{{ $t('message.show_more') }}</p>
					</div>
				</a>
			</div>

			<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"><img src="/images/top up rm20.webp"
					alt="Top Up Rm20" style="margin-bottom: 16px;"></a>

			<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"><img src="/images/Turnover Bonus.webp"
					alt="Turnover Bonus" style="margin-bottom: 16px;"></a>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import RB_Img_Carousel from '/src/components/RB_Img_Carousel.vue'
import RB_RW_Img_Carousel from '/src/components/RB_RW_Img_Carousel.vue'

export default {
	name: 'RightBanner',
	components: {
		RB_Img_Carousel,
		RB_RW_Img_Carousel
	},
	computed: {
		...mapGetters(['link_winboxmys', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_winboxmys');
	}

};
</script>

<style scoped>
.Right_Banner_Container {
	background: rgba(0, 0, 0, .3);
	padding: 10px 15px 0px 15px;
	height: 100%;
	border-left: 1px solid rgba(255, 255, 255, .5);
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
	margin-bottom: 5px;
}

.login-register-container {
	display: flex;
	margin-bottom: 16px;
	justify-content: space-between;
}

.login-register-container a {
	width: 50%;
}

.login-register-container img {
	border-radius: 0%;
}

.Join {
	padding-right: 5px;
}

.Register {
	padding-left: 5px;
}

.RB_Small_Text_Container {
	width: 50%;
}

.RB_Small_Text_Container p {
	color: black;
	font-size: 15px;
	font-weight: 400;
	font-family: Lato, sans-serif;
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
	color: black;
	font-size: 25px;
}

.Tablet-Mobile-view {
	display: none;
}

@media screen and (max-width: 1000px) {
	.Mobile_View {
		display: block !important;
	}

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

.Share_Section {
	position: relative;
}

.button-grp {
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	gap: 5px;
	bottom: 5%;
}

.button-container {
	width: 45%;
	height: 40px;
	border: 1px solid transparent;
	position: relative;
	float: left;
	background-color: black;
	margin-bottom: 16px;
	opacity: 0;
}

.button-container a {
	display: block;
	width: 100%;
	height: 100%;
}

.button_width {
	width: 100%;
	margin-bottom: 8px !important;
}

@media screen and (max-width: 1000px) {

	.button-grp {
		bottom: 4%;
		margin-top: unset;
	}

	.button-container {
		height: 55px;
	}
}

@media screen and (max-width: 600px) {
	.button-grp {
		bottom: 2%;
	}

	.button-container {
		height: 45px;
	}
}

@media screen and (max-width: 430px) {

	.button-container {
		height: 25px;
	}
}

@media screen and (max-width: 380px) {

	.button-container {
		height: 20px;
	}
}

@media screen and (max-width: 320px) {

	.button-grp {
		bottom: 0;
	}
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

.RB-mobile-img-grp {
	margin-top: 22px;
}

.RB-mobile-img-grp img {
	margin-bottom: 16px;
}
</style>