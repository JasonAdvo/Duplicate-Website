<template>
	<div class="Right_Banner_Container">
		<div class="RB_Imgs">
			<div class="login-register-container">
				<a href="https://www.atascasinobet.com/sign-up" rel="nofollow"><img class="Join"
						src="/images/RB_Join_Img.gif" alt="Login"></a>
				<a href="https://www.atascasinobet.com/sign-up" rel="nofollow"><img class="Register"
						src="/images/RB_Register_Img.gif" alt="Register"></a>
			</div>
			<div class="RB_Info_Container" style="display: flex; margin-bottom: 23px">
				<div class="RB_Small_Text_Container">
					<div class="Baki">
						<p>{{ $t('message.balance') }} </p>
						<p><strong>0.00</strong></p>
					</div>
					<p>{{ $t('message.Min_Deposit') }} <strong>RM1.00</strong></p>
					<p>{{ $t('message.Min_Withdrawal') }} <strong>RM20.00</strong></p>
				</div>
				<div class="RB_Cash_Btn_Container">
					<a href="https://www.atascasinobet.com/sign-up" rel="nofollow">
						<img class="no-br" src="/images/RB_Deposit_Img.gif" alt="Deposit">
					</a>
					<a href="https://www.atascasinobet.com/sign-up" rel="nofollow">
						<img class="no-br" src="/images/RB_Withdraw_Img.gif" alt="Withdraw">
					</a>
					<a href="https://www.atascasinobet.com/sign-up" rel="nofollow">
						<img class="no-br" src="/images/RB_Refresh_Img.gif" alt="Refresh">
					</a>
				</div>
			</div>

			<div class="Tablet-Mobile-view">
				<a href="https://www.atascasinobet.com/sign-up" rel="nofollow"><img src="/images/LB_Img_2.jpg"
						alt="Banner"></a>
				<div class="button-grp">
					<a href="https://www.atascasinobet.com/sign-up" rel="nofollow"><img class="col-6 no-br"
							src="/images/M24_Share_btn.gif" alt="Share"></a>
					<a href="https://www.atascasinobet.com/sign-up" rel="nofollow"><img class="col-6 no-br"
							src="/images/M24_Downline_btn.png" alt="Downline"></a>
					<a href="https://www.atascasinobet.com/sign-up" rel="nofollow"><img class="col-6 no-br"
							src="/images/M24_Copy_btn.png" alt="Copy"></a>
					<a href="https://www.atascasinobet.com/sign-up" rel="nofollow"><img class="col-6 no-br"
							src="/images/M24_More_btn.png" alt="More"></a>
				</div>
			</div>


			<div class="sport-betting-container">
				<div class="SB-content-container">
					<div class="team">
						<img src="/images/team-1.webp" alt="team 1">
						<p>{{ $t('message.team_1') }}</p>
					</div>
					<div class="time-info">
						<p>{{ $t('message.start_time') }}</p>
						<p>17 Aug 2024</p>
						<p class="time">03:00</p>
						<a href="https://www.atascasinobet.com/sports-live" rel="nofollow">
							<div class="bet-now-container">
								<p>{{ $t('message.bet_now') }}</p>
							</div>
						</a>
					</div>
					<div class="team">
						<img src="/images/team-2.webp" alt="team 2">
						<p>{{ $t('message.team_2') }}</p>
					</div>
				</div>
				<a href="https://www.atascasinobet.com/sports-live" rel="nofollow">
					<div class="show-more-button-container">
						<p>{{ $t('message.show_more') }}</p>
					</div>
				</a>
			</div>

			<a href="https://www.atascasinobet.com/sign-up" rel="nofollow"><img
					src="/images/Atas-Post-Banner-(Eng).webp" alt="188% Welcome Bonus" style="margin-bottom: 16px;">
			</a>

			<a href="https://www.atascasinobet.com/sign-up" rel="nofollow"><img src="/images/check_in.webp"
					alt="Weekly Check In Bonus" style="margin-bottom: 16px;">
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RightBanner',

};
</script>

<style scoped>
.Right_Banner_Container {
	background: rgba(0, 0, 0, .3);
	padding: 10px 15px 30px 15px;
	height: 100%;
	border-left: 1px solid rgba(255, 255, 255, .5);
}

@media screen and (max-width: 430px) {
	.Right_Banner_Container {
		padding: 0 15px 0px 15px;
		border-left: unset;
	}

	.login-register-container {
		padding-top: 0px !important;
	}

}

.RB_Imgs img {
	max-width: 100%;
	border-radius: 20px;
}

.RB_Info_Container {
	background-image: url('/images/RB_Cash_Btn_Container_Img.webp');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: bottom;
	margin: 0px -10px;
	padding: 15px 15px;
}

.RB_Cash_Btn_Container {
	width: 50%;
	padding-left: 15px;
	text-align: right;
}

.RB_Cash_Btn_Container img {
	height: 44px;
	width: 130px;
	margin-bottom: 5px;
}

.login-register-container {
	padding: 10px 0;
	display: flex;
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
	display: flex;
	flex-direction: column;
	width: 50%;
	white-space: nowrap;
	justify-content: space-around;
}

.RB_Small_Text_Container p {
	color: white;
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
	color: #FFC107;
	font-size: 24px;
}

.Tablet-Mobile-view {
	display: none;
}

@media screen and (max-width: 1000px) {
	.Tablet-Mobile-view {
		display: flex !important;
		flex-direction: column;
	}

	.RB_Cash_Btn_Container {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: space-around;
	}

	.RB_Cash_Btn_Container img {
		width: 80%;
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

	.Baki strong {
		font-size: 20px;
	}

	.button-grp a {
		width: 50% !important;
	}

	.button-grp img {
		width: 100% !important;
	}
}

.button-grp {
	margin-top: -25%;
	display: flex;
	flex-wrap: wrap;
}

.button-grp img {
	width: 50%;
	padding: 0 5px;
	margin-bottom: 16px;
}

.sport-betting-container {
	background-image: url('/images/soccer-betting-img.jpg');
	/* background-position: center; */
	background-size: cover;
	padding: 20px 0 10px 0;
	margin-bottom: 16px;
	border-radius: 20px;
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
	line-height: 1;
	margin-bottom: 0;
}

.team {
	width: 30%;
}

.team img {
	margin-bottom: 10px;
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

.no-br {
	border-radius: unset !important;
}
</style>