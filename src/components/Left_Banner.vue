<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<!-- <LB_Img_Carousel /> -->
			<a href="/" rel="nofollow"><img src="/images/LB_Img_1.webp" alt="PAGCOR">
			</a>
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
			<div class="Tablet-Mobile-view">
				<a href="/" rel="nofollow"><img src="/images/LB_Img_2.webp" alt="Share"></a>
				<div class="button-grp">
					<a href="/" rel="nofollow"><img class="col-6 no-br" src="/images/LB_Share_Img.webp" alt="Share"></a>
					<a href="/" rel="nofollow"><img class="col-6 no-br" src="/images/LB_Downline_Img.webp"
							alt="Downline"></a>
					<a href="/" rel="nofollow"><img class="col-6 no-br" src="/images/LB_Copy_Img.webp" alt="Copy"></a>
					<a href="/" rel="nofollow"><img class="col-6 no-br" src="/images/LB_More_Img.webp" alt="More"></a>
				</div>
				<a href="/" rel="nofollow"><img src="/images/LB_Telegram_Img.webp" alt="Telegram">
				</a>
				<a href="/" rel="nofollow"><img src="/images/LB_Facebook_Img.webp" alt="Facebook">
				</a>

				<a href="/" rel="nofollow"><img src="/images/LB_Img_3.webp" alt=""></a>
				<a href="/" rel="nofollow"><img src="/images/LB_Img_4.webp" alt=""></a>
			</div>

			<!-- <a href="/" rel="nofollow"><img src="/images/188welcome_bonus.webp" alt="188% Welcome Bonus">
			</a> -->
			<!-- <a href="/" rel="nofollow"><img src="/images/daily_top_up_bonus.webp" alt="Top Up Bonus">
			</a> -->
		</div>
	</div>
</template>

<script>
// import LB_Img_Carousel from '/src/components/LB_Img_Carousel.vue';
export default {
	name: 'LeftBanner',
	components: {
		// LB_Img_Carousel
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
	max-width: 100%;
	margin-bottom: 16px;
	border-radius: 20px;
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
	margin-top: -28%;
}

.button-grp img {
	padding: 0 5px;
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
}

@media screen and (max-width: 769px) {
	table {
		margin-bottom: 16px;
	}
}

table td {
	font-size: 11px;
	color: white;
	border: 1px solid white;
	font-weight: 500;
}

.green {
	background: #239809;
}

.red {
	background: #d02c27;
}

tbody td {
	width: 20%;
	height: 20px;
	padding: 4px;
}

.amount {
	color: #d3ab22;
	text-align: right;
}
</style>
