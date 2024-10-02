<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<LB_Img_Carousel />
			<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"><img src="/images/daily free spin bonus.gif"
					alt="Spin Bonus">
			</a>

			<div class="Share_Section">
				<img src="/images/LB_Img_2.webp" alt="Share">
				<div class="button-grp">
					<a :href="link_winboxmys + 'winbox-register'" rel="nofollow">
						<img class="col-6 no-br" src="/images/LB_Share_Img.webp" alt="Share">
					</a>
					<a :href="link_winboxmys + 'winbox-register'" rel="nofollow">
						<img class="col-6 no-br" src="/images/LB_Downline_Img.webp" alt="Downline">
					</a>
					<a :href="link_winboxmys + 'winbox-register'" rel="nofollow">
						<img class="col-6 no-br" src="/images/LB_Copy_Img.webp" alt="Copy">
					</a>
					<a :href="link_winboxmys + 'winbox-register'" rel="nofollow">
						<img class="col-6 no-br" src="/images/LB_More_Img.webp" alt="More">
					</a>
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
		...mapGetters(['link_winboxmys', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_winboxmys');
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

.button-grp img {
	padding: 0 5px;
	margin-bottom: 8px;
}

.button-grp a {
	width: calc(50% - 8px);
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
