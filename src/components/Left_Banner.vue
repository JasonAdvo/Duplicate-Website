<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<LB_Img_Carousel />
			<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img src="/images/Spin_bonus.gif"
					alt="Spin Bonus"></a>

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

			<img src="/images/LB_Img_1.webp" alt="Certificate">

			<div style="position: relative;">
				<img src="/images/LB_Img_2.webp" alt="Share">
				<div class="button-grp">
					<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img class="button_width"
							src="/images/LB_Share_Img.gif" alt="Share"></a>
					<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img class="button_width"
							src="/images/LB_Downline_Img.gif" alt="Downline"></a>
					<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img class="button_width"
							src="/images/LB_Copy_Img.gif" alt="Copy Link"></a>
					<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img class="button_width"
							src="/images/LB_More_Img.gif" alt="More Info"></a>
				</div>
			</div>

			<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img src="/images/LB_Img_3.webp"
					alt="Total Commission"></a>
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
		...mapGetters(['output_Link', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_API');
	}
};
</script>

<style scoped>
.Left_Banner_Container {
	background: rgba(0, 0, 0, .3);
	padding: 10px 15px 30px 15px;
	height: 100%;
}

.LB_Imgs img {
	width: 100%;
	margin-bottom: 16px;
}

@media screen and (max-width: 1000px) {

	.Left_Banner_Container {
		background: unset;
		padding-bottom: 0px;
		padding-top: 0px;
	}

}

.button-grp {
	position: absolute;
	margin-top: -25%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 8px;
}

@media screen and (max-width: 1000px) {
	.button-grp {
		bottom: 10%;
		margin-top: unset;
	}
}

@media screen and (min-width: 1920px) {
	.button-grp {
		margin-top: -23%;
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
	background: #0096FD;
}

.title span {
	color: white;
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
	border: 1px solid black;
	font-weight: 500;
}

@media screen and (min-width: 1440px) {
	table td {
		font-size: 11px;
	}
}

.green {
	color: white;
	background-image: linear-gradient(to bottom, #2ADAFF, #0096FD);
	padding-left: 4px;
}

.red {
	background: linear-gradient(to bottom, #fafafa, #cecece, #898989);
	font-weight: 700;
	color: #1f3ddb;
	padding-left: 4px;
}

tbody td {
	width: 20%;
	height: 20px;
	padding: 4px;
}

.amount {
	color: red;
	text-align: right;
	font-family: 'Montserrat', sans-serif;
}

.Lucky_Number_Btn {
	position: absolute;
	bottom: 5%;
	left: 8%;
	width: 40% !important;
}
</style>
