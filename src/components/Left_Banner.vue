<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<LB_Img_Carousel />
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
			<p>FREE SHARE RM3</p>

			<div class="Tablet-Mobile-view">
				<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow"><img src="/images/LB_Img_7.webp"
						alt="Get Bonus"></a>
				<div class="button-grp">
					<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
						<img class="col-6 no-br mb-1" src="/images/LB_Share_Img.webp" alt="Share">
					</a>
					<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
						<img class="col-6 no-br mb-1" src="/images/LB_Downline_Img.webp" alt="Downline">
					</a>
					<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
						<img class="col-6 no-br" src="/images/LB_Copy_Img.webp" alt="Copy">
					</a>
					<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
						<img class="col-6 no-br" src="/images/LB_Free_Img.gif" alt="More">
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
	width: 100%;
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
	width: 50%;
}

.no-br {
	border-radius: unset !important;
}
</style>
