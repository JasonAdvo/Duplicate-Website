<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<LB_Img_Carousel />
			<div class="Tablet-Mobile-view">
				<a href="https://www.atascasinobet.com/sign-up" rel="nofollow"><img src="/images/LB_Img_2.jpg"
						alt="Share"></a>
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
			<a href="https://www.atascasinobet.com/sign-up" rel="nofollow"><img src="/images/188welcome_bonus.webp"
					alt="188% Welcome Bonus"></a>
			<a href="https://www.atascasinobet.com/sign-up" rel="nofollow"><img src="/images/daily_top_up_bonus.webp"
					alt="Top Up Bonus"></a>
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
	margin-top: -32%;
}

.button-grp img {
	padding: 0 5px;
}

.no-br {
	border-radius: unset !important;
}
</style>
