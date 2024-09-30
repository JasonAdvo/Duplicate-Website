<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">

			<LB_Img_Carousel />

			<a :href="link_output + 'winbox-rigester'" rel="nofollow"><img src="/images/daily free spin bonus.gif"
					alt="Daily free spin bonus" style="margin-bottom: 16px;">
			</a>

			<div class="Tablet-Mobile-view">
				<div class="button-grp">
					<a :href="link_output + 'winbox-rigester'" rel="nofollow"><img class="col-6 no-br"
							src="/images/M24_Share_btn.gif" alt="Share"></a>
					<a :href="link_output + 'winbox-rigester'" rel="nofollow"><img class="col-6 no-br"
							src="/images/M24_Downline_btn.png" alt="Downline"></a>
					<a :href="link_output + 'winbox-rigester'" rel="nofollow"><img class="col-6 no-br"
							src="/images/M24_Copy_btn.png" alt="Copy"></a>
					<a :href="link_output + 'winbox-rigester'" rel="nofollow"><img class="col-6 no-br"
							src="/images/M24_More_btn.png" alt="More"></a>
				</div>

				<a :href="link_output + 'winbox-rigester'" rel="nofollow"><img src="/images/top up rm20.webp"
						alt="Top Up Bonus"></a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import LB_Img_Carousel from '/src/components/LB_Img_Carousel.vue';
export default {
	name: 'LeftBanner',
	components: {
		LB_Img_Carousel
	},
	data() {
		return {
			status: null,
			response: [],
		}
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

.button-grp img {
	padding: 0 5px;
	width: 50%;
}

.no-br {
	border-radius: unset !important;
}
</style>
