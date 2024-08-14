<template>
	<div class="Right_Banner_Container">
		<div class="RB_Imgs">
			<div class="Laptop-view">
				<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
					<img src="/images/Percuma RM 50.webp" alt="Percuma RM 50">
				</a>
			</div>

			<div class="RM3">
				<p>{{ $t('content.Free_Share') }}</p>
			</div>

			<div class="login-register-container">
				<a href="https://www.ataskasino.com/login/" rel="nofollow">
					<img class="Join" src="/images/RB_Login_Img.gif" alt="Login">
				</a>
				<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
					<img class="Register" src="/images/RB_Register_Img.gif" alt="Register">
				</a>
			</div>

			<div class="RB_Info_Container" style="display: flex">
				<div class="RB_Small_Text_Container">
					<div class="Baki">
						<p>{{ $t('message.balance') }} </p>
						<p><strong>0.00</strong></p>
					</div>
					<p>{{ $t('message.Min_Deposit') }} <strong>RM5.00</strong></p>
					<p>{{ $t('message.Min_Withdrawal') }} <strong>RM50.00</strong></p>
				</div>
				<div class="RB_Cash_Btn_Container">
					<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
						<img class="no-br" src="/images/RB_Deposit_Img.webp" alt="Deposit">
					</a>
					<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
						<img class="no-br" src="/images/RB_Withdraw_Img.webp" alt="Withdraw">
					</a>
					<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
						<img class="no-br" src="/images/RB_Refresh_Img.webp" alt="Refresh">
					</a>
				</div>
			</div>

			<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
				<img src="/images/RB_Img_3.webp" alt="Slot Competition Leaderboard">
			</a>

			<div class="Tablet-Mobile-view">
				<div style="position: relative;">
					<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/LB_Img_7.webp"
							alt="Get Bonus"></a>
					<div class="button-grp">
						<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
							<img class="col-6" src="/images/LB_Share_Img.webp" alt="Share">
						</a>
						<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
							<img class="col-6" src="/images/LB_Downline_Img.webp" alt="Downline">
						</a>
						<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
							<img class="col-6" src="/images/LB_Copy_Img.webp" alt="Copy">
						</a>
						<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
							<img class="col-6" src="/images/LB_Free_Img.gif" alt="More">
						</a>
					</div>
					<a href="/"><img src="/images/LB_FB_Img.webp" alt="Facebook"></a>
					<a href="https://t.me/atas77channel" rel="nofollow"><img src="/images/LB_Telegram_Img.webp"
							alt="Telegram"></a>
					<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/LB_App_Img.webp"
							alt="App Download"></a>
				</div>
			</div>

			<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
				<img src="/images/ATAS-BAds.webp" alt="Bonus Top Up">
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
	margin-top: 10px;
	padding: 0px 15px 0px 15px;
	height: 100%;
	background: rgba(0, 0, 0, .3);
}

@media screen and (max-width: 430px) {
	.Right_Banner_Container {
		padding: 0 15px 0px 15px;
	}

	.login-register-container {
		padding-top: 0px !important;
	}

}

.RM3 {
	text-align: center;
	color: #143808;
	font-weight: bolder;
}

.RB_Imgs img {
	width: 100%;
	margin-bottom: 16px;
}

.RB_Info_Container {
	margin-bottom: 16px;
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
	justify-content: space-between;
	margin-bottom: 16px;
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
	color: #022f8a;
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
	color: #022f8a;
	margin: 5px 0;
}

.Baki strong {
	color: #022f8a;
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

	.Right_Banner_Container {
		margin-top: 0;
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
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 16px;
}

.button-grp a {
	width: 50%;
}

.button-grp img {
	width: 100%;
	margin-bottom: 0;
}

.sport-betting-container {
	background-image: url('/images/soccer-betting-img.jpg');
	/* background-position: center; */
	background-size: cover;
	padding: 20px 0 10px 0;
	margin-bottom: 16px;
	border-radius: 20px;
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
	font-weight: 700;
	color: #258D2D;
	font-family: 'Digital-7', sans-serif;
}

.no-br {
	border-radius: unset !important;
}

.RB-mobile-img-grp img {
	margin-bottom: 16px;
}
</style>