<template>
	<div class="Right_Banner_Container">
		<div class="RB_Imgs">

			<div class="Mobile_View" style="display: none;">
				<RB_Img_Carousel />
				<a :href="link_output + 'winbox-register'" rel="nofollow"><img style="margin-bottom: 16px;"
						src="/images/Spin Bonus.webp" alt="Spin Bonus"></a>

				<img src="/images/LB_Img_1.webp" alt="Trust">

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
			</div>

			<a :href="link_output + 'winbox-register'" rel="nofollow"><img src="/images/Bonus.gif"
					alt="93% Marc Marquex Bonus" style="margin-bottom: 16px;">
			</a>

			<div class="Big_Info_Container">
				<div class="login-register-container">
					<a :href="link_output + 'winbox-login'" rel="nofollow"><img class="Join"
							src="/images/RB_Login_Img.gif" alt="Login"></a>
					<a :href="link_output + 'winbox-register'" rel="nofollow"><img class="Register"
							src="/images/RB_Register_Img.gif" alt="Register"></a>
				</div>
				<div class="RB_Info_Container" style="display: flex;">
					<div class="RB_Small_Text_Container">
						<div class="Baki">
							<p>{{ $t('message.balance') }} </p>
							<p><strong>RM0.00</strong></p>
						</div>
						<p>{{ $t('message.Min_Deposit') }} <strong>RM1.00</strong></p>
						<p>{{ $t('message.Min_Withdrawal') }} <strong>RM20.00</strong></p>
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
			</div>


			<div class="Mobile_View" style="display: none;">
				<div style="position: relative;">
					<img style="border-radius: 20px;" src="/images/LB_Img_2.gif" alt="Share">
					<div class="button-grp">
						<a :href="link_output + 'winbox-register'" rel="nofollow"><img class="button_width"
								src="/images/LB_Share_Img.gif" alt="Share"></a>
						<a :href="link_output + 'winbox-register'" rel="nofollow"><img class="button_width"
								src="/images/LB_Downline_Img.webp" alt="Downline"></a>
						<a :href="link_output + 'winbox-register'" rel="nofollow"><img class="button_width"
								src="/images/LB_Copy_Img.webp" alt="Copy"></a>
						<a :href="link_output + 'winbox-register'" rel="nofollow"><img class="button_width"
								src="/images/LB_Free_Img.gif" alt="Free Bot"></a>
					</div>
				</div>


				<div style="position: relative;">
					<img src="/images/Luck_Draw_Deposit.webp" alt="Lucky Draw Deposit">
					<a :href="link_output + 'winbox-register'" rel="nofollow">
						<img class="Lucky_Number_Btn" src="/images/Luck_Number_Btn.gif" alt="Lucky Number Button">
					</a>
				</div>

				<a :href="link_output + 'winbox-register'" rel="nofollow">
					<img style="border-radius: 10px;" src="/images/Telco.webp" alt="Telco">
				</a>

				<a :href="link_output + 'winbox-register'" rel="nofollow">
					<img style="border-radius: 10px;" src="/images/Pussy_888.gif" alt="Notice">
				</a>

				<a :href="link_output + 'winbox-register'" rel="nofollow">
					<img style="border-radius: 10px;" src="/images/Predict.gif" alt="Predict and Win">
				</a>

			</div>

			<a :href="link_output + 'winbox-register'" rel="nofollow">
				<img style="margin-bottom: 16px;" src="/images/Game_Tips.gif" alt="Game Tips">
			</a>

			<a :href="link_output + 'winbox-register'" rel="nofollow"><img src="/images/Turnover Bonus.webp"
					alt="Turnover Bonus" style="margin-bottom: 16px;"></a>

			<a :href="link_output + 'winbox-register'" rel="nofollow"><img src="/images/top up rm20.webp"
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
.button-grp {
	position: absolute;
	margin-top: -29%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
}

@media screen and (max-width: 1000px) {
	.Mobile_View {
		display: block !important;
	}

	.button-grp {
		bottom: 4%;
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

.title {
	position: relative;
}

.title span {
	color: #ff0000;
	font-weight: 700;
	padding-left: 4px;
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
	color: black;
	border: 1px solid #005032;
	font-weight: 700;
}

@media screen and (min-width: 1440px) {
	table td {
		font-size: 11px;
	}
}

.green {
	color: white;
	background-image: linear-gradient(to left, #ff0000, #DA0101);
	padding-left: 4px;
}

.red {
	color: black;
	background-image: linear-gradient(to left, #ff6600, #ff9900);
	padding-left: 4px;
}

tbody td {
	width: 20%;
	height: 20px;
	padding: 4px;
}

.amount {
	color: #005032;
	text-align: right;
	font-weight: 700;
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
	padding: 10px;
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

.login-register-container {
	display: flex;
	margin-bottom: 16px;
	justify-content: space-between;
}

.login-register-container a {
	width: 50%;
}

.Join {
	border-radius: 10px;
	padding-right: 5px;
}

.Register {
	border-radius: 10px;
	padding-left: 5px;
}

.RB_Small_Text_Container {
	width: 50%;
}

.RB_Small_Text_Container p {
	color: black;
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
	color: #da9100;
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

.button_width {
	width: 100%
}

.Lucky_Number_Btn {
	position: absolute;
	bottom: 5%;
	left: 8%;
	width: 40% !important;

}
</style>