<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<LB_Img_Carousel />
			<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"><img src="/images/Spin Bonus.webp"
					alt="Spin Bonus">
			</a>

			<div class="Share_Section">
				<div class="button-grp">
					<!-- Blank containers with links inside -->
					<div class="button-container">
						<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"></a>
					</div>
					<div class="button-container">
						<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"></a>
					</div>
					<div class="button-container">
						<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"></a>
					</div>
					<div class="button-container">
						<a :href="link_winboxmys + 'winbox-register'" rel="nofollow"></a>
					</div>
				</div>
			</div>
		</div>
		<div class="RW_Img_Carousel">
			<RW_Img_Carousel />
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import LB_Img_Carousel from '/src/components/LB_Img_Carousel.vue'
import RW_Img_Carousel from '/src/components/RW_Img_Carousel.vue'

export default {
	name: 'LeftBanner',
	components: {
		LB_Img_Carousel,
		RW_Img_Carousel
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

@media screen and (max-width: 1000px) {

	.Left_Banner_Container {
		background: unset;
		padding-bottom: 0px;
		border-right: unset;
		padding-top: 0px;
	}

}

.Share_Section {
	background-image: url('/images/LB_Img_2.webp');
	padding: 103% 2% 4% 5%;
	background-size: 100% 100%;
	background-color: transparent;
	position: relative;
}

.button-grp {
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

.button-container {
	width: calc(50% - 5px);
	height: 34px;
	border: 1px solid transparent;
	position: relative;
	float: left;
}

.button-container a {
	display: block;
	width: 100%;
	height: 100%;
	background-color: transparent;
	/* Make the link take up full space */
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

.RW_Img_Carousel {
	margin-top: 16px;
}
</style>
