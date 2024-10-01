<template>
	<div class="Right_Banner_Container">

		<div class="Mobile_View" style="display: none;">
			<RB_Img_Carousel />
			<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img style="width: 100%; margin-bottom: 16px"
					src="/images/Spin Bonus.webp" alt="Spin Bonus">
			</a>

		</div>

		<div class="RB_Imgs">
			<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img src="/images/Marc Marquez bonus.webp"
					alt="93% Marc Marquex Bonus" style="margin-bottom: 16px;">
			</a>

			<div class="Mobile_View" style="display: none;">
				<img style="margin-bottom: 16px;" src="/images/LB_Img_1.webp" alt="Deposit Fast & Secure">
			</div>

			<div class="Live_Time">
				Date & Time :
				<span>{{ liveTime }}</span>
			</div>

			<div class="Big_Info_Container">
				<div class="login-register-container">
					<a :href="link_winbox77 + 'winbox-login'" rel="nofollow"><img class="Join"
							src="/images/RB_Login_Img.gif" alt="Login"></a>
					<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img class="Register"
							src="/images/RB_Register_Img.gif" alt="Register"></a>
				</div>

				<div class="RB_Info_Container" style="display: flex;">
					<div class="RB_Small_Text_Container">
						<div class="Baki">
							<p>{{ $t('message.balance') }} </p>
							<p><strong>0.00</strong></p>
						</div>
						<p>{{ $t('message.Min_Deposit') }} <strong>RM5.00</strong></p>
						<p>{{ $t('message.Min_Withdrawal') }} <strong>RM50.00</strong></p>
					</div>
					<div class="RB_Cash_Btn_Container">
						<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow">
							<img src="/images/RB_Deposit_Img.webp" alt="Deposit">
						</a>
						<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow">
							<img src="/images/RB_Withdraw_Img.webp" alt="Withdraw">
						</a>
						<a href="/">
							<img src="/images/RB_Refresh_Img.webp" alt="Refresh">
						</a>
					</div>
				</div>
			</div>

			<div class="Promo_Section">
				<div class="Special_Promo_Section">
					<div style="margin-bottom: 5px;">
						SPECIAL PROMO
					</div>
					<div class="Promo_Container">
						<div class="Promo_Bg_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">Daftar Baru Free RM1</p>
								<p class="name">RM1</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">Telegram Free ( RM 1 Up to RM 88)</p>
								<p class="name">RM88</p>
							</div>
						</div>
					</div>
				</div>

				<div class="Special_Promo_Section">
					<div style="margin-bottom: 5px;">
						CUCI FULL 100%
						<p style="color: #0096FF; font-size: 10px; margin: 0">TANPA DEPOSIT</p>
					</div>
					<div class="Promo_Container">
						<div class="Promo_Bg_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">365 FREE BONUS RM 0.1 ~ RM 10</p>
								<p class="name">MYR ?</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE SHARE</p>
								<p class="name">RM3</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">Downline 1st Deposit</p>
								<p class="name">RM8</p>
							</div>
						</div>
					</div>

				</div>

				<div class="Special_Promo_Section">
					<div style="margin-bottom: 5px;">
						NEW MEMBER PROMOTION
					</div>
					<div class="Promo_Container">
						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">WELCOME FREE</p>
								<p class="name">RM10</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">WELCOME BONUS 77%</p>
								<p class="name">77%</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">Informasi Penting</p>
								<p class="name">MYR ?</p>
							</div>
						</div>
					</div>

				</div>

				<div class="Special_Promo_Section">
					<div style="margin-bottom: 5px;">
						FREE BONUS
						<span style="color: #0096FF;">[DAILY] </span>
					</div>
					<div class="Promo_Container">
						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE DAILY BONUS</p>
								<p class="name">RM3</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE DAILY BONUS</p>
								<p class="name">RM6</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE DAILY BONUS</p>
								<p class="name">RM9</p>
							</div>
						</div>
					</div>

				</div>

				<div class="Special_Promo_Section">
					<div style="margin-bottom: 5px;">
						HOT PROMOTION
						<p style="color: #0096FF; font-size: 10px; margin: 0">DAILY CLAIM 1 TIME</p>
					</div>
					<div class="Promo_Container">
						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE RM5 x2 times</p>
								<p class="name">RM5</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE RM10 x2 times</p>
								<p class="name">RM10</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE RM15 x2 times</p>
								<p class="name">RM15</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE RM25 x2 times</p>
								<p class="name">RM25</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE RM40 x2 times</p>
								<p class="name">RM40</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE RM50 x2 times</p>
								<p class="name">RM50</p>
							</div>
						</div>
					</div>
				</div>

				<div class="Special_Promo_Section">
					<div style="margin-bottom: 5px;">
						UNLIMITED BONUS
						<p style="color: #0096FF; font-size: 10px; margin: 0">MAX WITHDRAW 500K</p>
					</div>
					<div class="Promo_Container">
						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">UNLIMITED</p>
								<p class="name">5%</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">UNLIMITED</p>
								<p class="name">8%</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">UNLIMITED</p>
								<p class="name">10%</p>
							</div>
						</div>
					</div>
				</div>

				<div class="Special_Promo_Section">
					<div style="margin-bottom: 5px;">
						HOT PROMOTION
						<p style="color: #0096FF; font-size: 10px; margin: 0">DAILY CLAIM 1 TIME</p>
					</div>
					<div class="Promo_Container">
						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE RM5 x2 times</p>
								<p class="name">RM5</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE RM10 x2 times</p>
								<p class="name">RM10</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE RM15 x2 times</p>
								<p class="name">RM15</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE RM25 x2 times</p>
								<p class="name">RM25</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE RM40 x2 times</p>
								<p class="name">RM40</p>
							</div>
						</div>
					</div>
				</div>

				<div class="Special_Promo_Section">
					<div style="margin-bottom: 5px;">
						UNLIMITED BONUS
						<p style="color: #0096FF; font-size: 10px; margin: 0">MAX WITHDRAW 500K</p>
					</div>
					<div class="Promo_Container">
						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">UNLIMITED</p>
								<p class="name">5%</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">UNLIMITED</p>
								<p class="name">8%</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">UNLIMITED</p>
								<p class="name">10%</p>
							</div>
						</div>
					</div>
				</div>

				<div class="Special_Promo_Section">
					<div style="margin-bottom: 5px;">
						UNLIMITED BONUS
						<p style="color: #0096FF; font-size: 10px; margin: 0">MAX WITHDRAW 500K</p>
					</div>
					<div class="Promo_Container">
						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">UNLIMITED</p>
								<p class="name">5%</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">UNLIMITED</p>
								<p class="name">8%</p>
							</div>
						</div>

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.gif" alt="Promotion">
							<div class="Text_Container">
								<p class="text">UNLIMITED</p>
								<p class="name">10%</p>
							</div>
						</div>
					</div>
				</div>

			</div>

			<div class="Mobile_View" style="display: none;">
				<div class="Share_Section">
					<img src="/images/LB_Img_2.webp" alt="Share">
					<div class="button-grp">
						<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img class="button_width"
								src="/images/LB_Share_Img.webp" alt="Share"></a>
						<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img class="button_width"
								src="/images/LB_Downline_Img.webp" alt="Downline"></a>
						<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img class="button_width"
								src="/images/LB_Copy_Img.webp" alt="Copy"></a>
						<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img class="button_width"
								src="/images/LB_More_Img.webp" alt="More"></a>
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
							<a :href="link_winbox77 + 'winbox-login'" rel="nofollow">
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
					<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow">
						<div class="show-more-button-container">
							<p>{{ $t('message.show_more') }}</p>
						</div>
					</a>
				</div>
			</div>

			<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img src="/images/Turnover Bonus.webp"
					alt="Turnover Bonus" style="margin-bottom: 16px;"></a>

			<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img src="/images/top up rm20.webp"
					alt="Top Up Rm20" style="margin-bottom: 16px;"></a>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import RB_Img_Carousel from '/src/components/RB_Img_Carousel.vue'

export default {
	name: 'RightBanner',
	components: {
		RB_Img_Carousel,
	},
	data() {
		return {
			liveTime: ''
		}
	},
	computed: {
		...mapGetters(['link_winbox77', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_winbox77');
		this.updateTime();
		setInterval(this.updateTime, 1000);
	},
	methods: {
		updateTime() {
			const now = new Date();

			// Format date and time as: DD MM YYYY (DAY) HH:MM:SS
			const day = String(now.getDate()).padStart(2, '0'); // Day of month
			const month = now.toLocaleString('en-US', { month: 'long' }); // Month (January is 0)
			const year = now.getFullYear(); // Year
			const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'short' }); // Day of the week
			const hours = String(now.getHours()).padStart(2, '0'); // Hours (24-hour format)
			const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutes
			const seconds = String(now.getSeconds()).padStart(2, '0'); // Seconds

			// Format: DD MM YYYY (DAY) HH:MM:SS
			this.liveTime = `${day} ${month} ${year} (${dayOfWeek}) ${hours}:${minutes}:${seconds}`;
		}
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

.Live_Time {
	font-size: 14px;
	font-weight: 300;
	font-family: 'Montserrat', sans-serif;
	text-align: center;
	margin-bottom: 16px;
	color: gold;
}

.Big_Info_Container {
	background-image: url('/images/RB_Big_Info_Bg_Img.webp');
	background-size: 100% 100%;
	padding: 8px 10px;
	margin-bottom: 16px;
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

.Special_Promo_Section {

	margin-bottom: 16px;
}

.Promo_Container {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}

.Promo_Bg_Container {
	position: relative;
	float: left;
}

.Shadow_Container::before {
	content: "";
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	z-index: 1;
	border-radius: 8px;
}

.Promo_Bg {
	max-height: 120px;
	width: unset !important;
	border-radius: 8px;
}

.Text_Container {
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	padding: 5px 5px 0;
	text-align: center;
}

.text,
.name {
	margin: 0;
	color: #25F9FD;
	text-shadow: 1px 1px 3px #000, 1px 1px 5px #000, 1px 1px 1px #000;
}

.text {
	font-size: 13px;
	min-height: 35px;
}

.name {
	font-size: 18px;
	font-weight: 700;
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
	margin-top: -29%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
}

@media screen and (max-width: 1000px) {
	.button-grp {
		bottom: 2%;
		margin-top: unset;
	}
}

@media screen and (min-width: 1920px) {
	.button-grp {
		margin-top: -27%;
	}
}

.button-grp img {
	padding: 0 5px;
}

.button-grp a {
	width: calc(50% - 8px);
}

@media screen and (min-width: 610px) and (max-width: 770px) {
	.button-grp a {
		width: calc(50% - 15px);
	}
}

.button_width {
	width: 100%;
	margin-bottom: 8px !important;
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