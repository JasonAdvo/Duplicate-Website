<template>
	<div class="Right_Banner_Container">
		<div class="RB_Imgs">

			<div class="Mobile_View" style="display: none;">
				<RB_Img_Carousel />
				<a :href="link_output + 'winbox-rigester'" rel="nofollow"><img style="margin-bottom: 16px;"
						src="/images/daily free spin bonus.gif" alt="Spin Bonus"></a>

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

			<a :href="link_output + 'winbox-rigester'" rel="nofollow"><img src="/images/Marc Marquez bonus.webp"
					alt="93% Marc Marquex Bonus" style="margin-bottom: 16px;">
			</a>

			<div class="Big_Info_Container">
				<div class="login-register-container">
					<a href="/">
						<div class="Join">
							LOGIN
						</div>
					</a>
					<a :href="link_output + 'winbox-rigester'" rel="nofollow">
						<div class="Register">
							REGISTER
						</div>
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
						<a :href="link_output + 'winbox-rigester'" rel="nofollow">
							<img src="/images/RB_Deposit_Img.gif" alt="Deposit">
						</a>
						<a :href="link_output + 'winbox-rigester'" rel="nofollow">
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
					<div class="button-grp">
						<a :href="link_output + 'winbox-rigester'" rel="nofollow">
							<div class="button_width">
								SHARE
							</div>
						</a>
						<a :href="link_output + 'winbox-rigester'" rel="nofollow">
							<div class="button_width">
								DOWNLINE CHART
							</div>
						</a>
						<a :href="link_output + 'winbox-rigester'" rel="nofollow">
							<div class="button_width">
								COPY REFERRAL LINK
							</div>
						</a>
						<a :href="link_output + 'winbox-rigester'" rel="nofollow">
							<div class="button_width">
								GAME TIPS
							</div>
						</a>
					</div>
				</div>
			</div>

			<a :href="link_output + 'winbox-rigester'" rel="nofollow"><img src="/images/Turnover Bonus.webp"
					alt="Turnover Bonus" style="margin-bottom: 16px;"></a>

			<a :href="link_output + 'winbox-rigester'" rel="nofollow"><img src="/images/top up rm20.webp"
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
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 8px;
}

@media screen and (max-width: 1000px) {
	.Mobile_View {
		display: block !important;
	}
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
	border: 2px solid black;
	background: linear-gradient(180deg, #a500fb 0%, #4e01b3 100%);
	width: 90%;
	margin-bottom: 8px !important;
	border-radius: 8px;
	height: 40px;
	text-align: center;
	font-size: 14px;
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
	/* background-image: url('/images/Big_Info_Bg_Img.webp'); */
	background-color: rgba(0, 0, 0, .3);
	border: 2px solid #9d00ff;
	/* background-size: 100% 100%; */
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
	height: 40px;
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
	color: #9d00ff;
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
</style>