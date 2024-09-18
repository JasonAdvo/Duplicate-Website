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

			<div>
				<RW_Img_Carousel />
			</div>
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

.Share_Section {
	position: relative;
}

.button-grp {
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	gap: 5px;
	bottom: 5%;
}

.button-container {
	width: 45%;
	height: 40px;
	border: 1px solid transparent;
	position: relative;
	float: left;
	background-color: black;
	margin-bottom: 16px;
	opacity: 0;
}

.button-container a {
	display: block;
	width: 100%;
	height: 100%;
}

.button_width {
	width: 100%;
	margin-bottom: 8px !important;
}

@media screen and (max-width: 2000px) {
	.button-grp {
		bottom: 2%;
	}

	.button-container {
		height: 40px;
	}
}

@media screen and (max-width: 1500px) {

	.button-container {
		height: 30px;
	}
}

@media screen and (max-width: 1200px) {
	.button-grp {
		bottom: 4%;
	}

	.button-container {
		height: 25px;
	}
}


@media screen and (max-width: 1000px) {

	.Left_Banner_Container {
		background: unset;
		padding-bottom: 0px;
		border-right: unset;
		padding-top: 0px;
	}

	.button-grp {
		bottom: 5%;
		margin-top: unset;
	}

	.button-container {
		height: 55px;
	}
}

@media screen and (max-width: 600px) {
	.button-grp {
		bottom: 4%;
	}

	.button-container {
		height: 50px;
	}
}

@media screen and (max-width: 430px) {

	.button-container {
		height: 30px;
	}
}

@media screen and (max-width: 380px) {

	.button-container {
		height: 25px;
	}
}

@media screen and (max-width: 320px) {

	.button-container {
		height: 20px;
	}
}
</style>
