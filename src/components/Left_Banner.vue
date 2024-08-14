<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<div style="margin-bottom: 16px;">
				<LB_Img_Carousel />
			</div>

			<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/LB_Img_1.gif"
					alt="Free Credit RM 10"></a>
			<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/LB_Img_2.webp"
					alt="Grand Launch"></a>
			<img src="/images/LB_Img_3.webp" alt="Payment List">
			<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/LB_Img_4.gif"
					alt="Free RM 55"></a>
			<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/LB_Img_5.gif"
					alt="Claim Free Credit RM 10"></a>
			<img src="/images/LB_Img_6.webp" alt="Progressive Jackpot and Live Transaction">
			<div class="RM3">
				<p>FREE SHARE RM3</p>
			</div>

			<div class="Tablet-Mobile-view">
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
				<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/LB_Img_8.webp"
						alt="888% Slot Bonus"></a>
				<a href="/" rel="nofollow"><img src="/images/LB_FB_Img.webp" alt="Facebook"></a>
				<a href="https://t.me/atas77channel" rel="nofollow"><img src="/images/LB_Telegram_Img.webp"
						alt="Telegram"></a>
				<a href="/" rel="nofollow"><img src="/images/LB_App_Img.webp" alt="App Download"></a>
			</div>
		</div>
	</div>
</template>

<script>
import LB_Img_Carousel from '/src/components/LB_Img_Carousel.vue';
export default {
	name: 'LeftBanner',
	components: {
		LB_Img_Carousel,
	},
	data() {
		return {

		};
	},
};
</script>

<style scoped>
.Left_Banner_Container {
	margin-top: 10px;
	padding: 0px 15px 30px 15px;
	height: 100%;
	background: rgba(0, 0, 0, .3);
}

.LB_Imgs {
	text-align: center;
}

.LB_Imgs img {
	width: 100%;
	margin-bottom: 16px;
}

.RM3 {
	text-align: center;
	color: #143808;
	font-weight: bolder;
}

@media screen and (max-width: 1000px) {
	.Tablet-Mobile-view {
		display: none;
	}

	.Left_Banner_Container {
		padding-bottom: 0px;
	}
}

.button-grp {
	margin-bottom: 16px;
}

.button-grp img {
	width: 50%;
	margin-bottom: 0;
}
</style>
