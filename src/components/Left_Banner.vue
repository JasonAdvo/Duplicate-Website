<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<LB_Img_Carousel />
			<a :href="link_output + 'winbox-register'" rel="nofollow"><img src="/images/daily free spin bonus.gif"
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

			<div style="position: relative;">
				<img style="border-radius: 20px;" src="/images/LB_Img_2.webp" alt="Share">
				<div class="button-grp">
					<a :href="link_output + 'winbox-register'" rel="nofollow"><img class="button_width"
							src="/images/LB_Share_Img.webp" alt="Share"></a>
					<a :href="link_output + 'winbox-register'" rel="nofollow"><img class="button_width"
							src="/images/LB_Downline_Img.webp" alt="Downline"></a>
					<a :href="link_output + 'winbox-register'" rel="nofollow"><img class="button_width"
							src="/images/LB_Copy_Img.webp" alt="Copy"></a>
					<a :href="link_output + 'winbox-register'" rel="nofollow"><img class="button_width"
							src="/images/LB_Tips_Img.webp" alt="Game Tips"></a>
				</div>
			</div>
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
		...mapGetters(['link_output', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_output');
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
	width: 100%;
	margin-bottom: 16px;
}

@media screen and (max-width: 1000px) {
	.Left_Banner_Container {
		background: unset;
		padding-bottom: 0px;
		border-right: unset;
		padding-top: 0px;
	}
}

.button-grp {
	position: absolute;
	margin-top: -28%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
}

@media screen and (max-width: 1000px) {
	.button-grp {
		bottom: 10%;
		margin-top: unset;
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
	color: black;
	background-image: linear-gradient(180deg, #a51aef 0%, #656ac8 100%);
	padding-left: 4px;
}

.red {
	color: black;
	background-image: linear-gradient(180deg, #a51aef 0%, #656ac8 100%);
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

.Lucky_Number_Btn {
	position: absolute;
	bottom: 5%;
	left: 8%;
	width: 40% !important;
}
</style>
