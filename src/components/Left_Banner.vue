<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<LB_Img_Carousel />
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
							TOP UP
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
			<div class="Tablet-Mobile-view">
				<div style="position: relative;">
					<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
						<img src="/images/LB_Img_2.webp" alt="Share">
						<div class="button-grp" style="position: absolute; bottom: 0;">
							<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
								<img class="col-6 no-br" src="/images/LB_Share_Img.webp" alt="Share">
							</a>
							<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
								<img class="col-6 no-br" src="/images/LB_Downline_Img.webp" alt="Downline">
							</a>
							<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
								<img class="col-6 no-br" src="/images/LB_Copy_Img.webp" alt="Copy">
							</a>
							<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
								<img class="col-6 no-br" src="/images/LB_More_Img.webp" alt="More">
							</a>
						</div>
					</a>
				</div>


				<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/LB_Telegram_Img.webp"
						alt="Telegram">
				</a>
				<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/LB_Img_3.webp"
						alt="Live Now"></a>
			</div>

			<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/188welcome_bonus.webp"
					alt="188% Welcome Bonus">
			</a>
			<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/daily_top_up_bonus.webp"
					alt="Top Up Bonus">
			</a>
		</div>
	</div>
</template>

<script>
import LB_Img_Carousel from '/src/components/LB_Img_Carousel.vue';
export default {
	name: 'LeftBanner',
	components: {
		LB_Img_Carousel
	}
};
</script>

<style scoped>
.Left_Banner_Container {
	padding: 10px 15px 30px 15px;
	height: 100%;
	border-right: 1px solid rgba(255, 255, 255, .5);
}

@media screen and (min-width: 769px) {
	.Left_Banner_Container {
		background: rgba(0, 0, 0, .3);
	}
}

.LB_Imgs img {
	max-width: 100%;
	margin-bottom: 16px;
	border-radius: 8px;
}

@media screen and (max-width: 1000px) {
	.Tablet-Mobile-view {
		display: none;
	}

	.Left_Banner_Container {
		padding-bottom: 0px;
		border-right: unset;
	}
}


.button-grp {
	padding: 0 12px;
	margin-bottom: 10px;
}

.button-grp img {
	padding: 0 2px;
}

.no-br {
	border-radius: unset !important;
}

.title {
	position: relative;
}

.title span {
	color: #d3ab22;
	font-weight: 700;
	padding-left: 5px;
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

@media screen and (max-width: 769px) {
	table {
		margin-bottom: 16px;
	}
}

table td {
	font-size: 11px;
	color: black;
	border: 1px solid white;
	font-weight: 500;
}

@media screen and (max-width: 321px) {
	table td {
		font-size: 10px;
	}
}

.green {
	background: radial-gradient(circle, rgba(79, 255, 69, 1) 0%, rgba(29, 75, 31, 1) 100%);
	color: white;
	padding-left: 5px;
}

.red {
	background: radial-gradient(circle, rgba(156, 63, 251, 1) 0%, rgba(38, 1, 23, 1) 100%);
	color: white;
	padding-left: 5px;
}

tbody td {
	width: 20%;
	height: 20px;
	padding: 4px;
}

table,
th,
td {
	border: 1px solid black !important;
	/* Change to desired color */
}

.amount {
	color: #d3ab22;
	text-align: right;
}
</style>
