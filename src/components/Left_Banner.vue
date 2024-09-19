<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<LB_Img_Carousel />
			<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img src="/images/Daily_bonus.webp"
					alt="Spin Bonus">
			</a>

			<div class="Share_Section">
				<img src="/images/LB_Img_2.webp" alt="Share">
				<div class="button-grp">
					<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img class="button_width"
							src="/images/LB_Share_Img.webp" alt="Share"></a>
					<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img class="button_width"
							src="/images/LB_Downline_Img.webp" alt="Downline"></a>
					<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img class="button_width"
							src="/images/LB_Copy_Img.webp" alt="Copy"></a>
					<a :href="link_winbox77 + 'winbox-signup'" rel="nofollow"><img class="button_width"
							src="/images/LB_More_Img.webp" alt="More"></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import LB_Img_Carousel from '/src/components/LB_Img_Carousel.vue'

export default {
	name: 'LeftBanner',
	components: {
		LB_Img_Carousel,
	},
	computed: {
		...mapGetters(['link_winbox77', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_winbox77');
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

.Share_Section {
	position: relative;
}

.button-grp {
	position: absolute;
	margin-top: -29%;
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


@media screen and (max-width: 1000px) {

	.Left_Banner_Container {
		background: unset;
		padding-bottom: 0px;
		border-right: unset;
		padding-top: 0px;
	}
}
</style>
