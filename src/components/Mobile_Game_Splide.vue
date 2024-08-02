<template>
	<div class="splide-width">
		<splide :options="splideOptions" v-if="isTabletOrMobile" class="splide">
			<splide-slide v-for="(image, index) in images" :key="index" :id="'image-container-' + index"
				:class="['image-container', { selected: selectedIndex === index }]"
				@click="selectImage(index); handleRedirect(index)">
				<img :src="selectedIndex === index ? image.selected : image.notSelected"
					:alt="'Image ' + (index + 1)" />
			</splide-slide>
		</splide>
	</div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
	name: 'MobileGameSplide',
	components: { Splide, SplideSlide },
	data() {
		return {
			images: [
				{ notSelected: '/images/ClotPlayN_NotS.webp', selected: '/images/ClotPlayN_S.webp' },
				{ notSelected: '/images/ClotPlay_NotS.webp', selected: '/images/ClotPlay_S.webp' },
				{ notSelected: '/images/JILI_NotS.webp', selected: '/images/JILI_S.webp' },
				{ notSelected: '/images/BPG_NotS.webp', selected: '/images/BPG_S.webp' },
				{ notSelected: '/images/SPINIX_NotS.webp', selected: '/images/SPINIX_S.webp' },
				{ notSelected: '/images/RICHG_NotS.webp', selected: '/images/RICHG_S.webp' },
				{ notSelected: '/images/NS_NotS.webp', selected: '/images/NS_S.webp' },
				{ notSelected: '/images/PragmaticP_NotS.webp', selected: '/images/PragmaticP_S.webp' },
				{ notSelected: '/images/AceWin_NotS.webp', selected: '/images/AceWin_S.webp' },
				{ notSelected: '/images/Joker_NotS.webp', selected: '/images/Joker_S.webp' },
				{ notSelected: '/images/KAG_NotS.webp', selected: '/images/KAG_S.webp' },
				{ notSelected: '/images/SlotG_NotS.webp', selected: '/images/SlotG_S.webp' },
				{ notSelected: '/images/LiveG_NotS.webp', selected: '/images/LiveG_S.webp' },
				{ notSelected: '/images/SportB_NotS.webp', selected: '/images/SportB_S.webp' },
			],
			selectedIndex: 0,
			splideOptions: {
				type: 'loop',
				perPage: 4,
				breakpoints: {
					1024: {
						perPage: 9,
					},
					430: {
						perPage: 4,
					}
				},
				gap: '10px',
				arrows: true,
				pagination: false,
				classes: {
					arrows: 'splide__arrows custom-arrows',
					arrow: 'splide__arrow custom-arrow',
				},
			}
		};
	},
	computed: {
		isTabletOrMobile() {
			return window.innerWidth < 1024;
		},
	},
	methods: {
		selectImage(index) {
			this.selectedIndex = index;
		},
		handleRedirect(index) {
			if (index === 0) {
				this.scrollToElement('.MB_Img_Gallery');
			} else {
				this.scrollToElement('.footer-content');
			}
		},
		scrollToElement(selector) {
			const element = document.querySelector(selector);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		},
		onResize() {
			this.isTabletOrMobile = window.innerWidth <= 1024;
		},
	},
	mounted() {
		window.addEventListener('resize', this.onResize);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize);
	},
};
</script>

<style scoped>
.splide {
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
}

.splide__track.splide__track--loop.splide__track--ltr.splide__track--draggable {
	width: 80% !important;
}

.image-container {
	cursor: pointer;
}

.image-container.selected img {
	border-bottom: 5px solid #FFF;
}

.image-container img {
	width: 100%;
	height: auto;
}

/* Custom styling for arrows */
.custom-arrows .custom-arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}

.splide__arrow--next {
	right: -2em !important;
}

.splide-icon .splide__arrow--prev {
	left: -2em !important;
}

.splide__arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}

@media screen and (max-width: 430px) {
	.splide-width {
		/* width: 80% !important; */
	}
}

@media screen and (max-width: 769px) {
	.splide-width {
		/* width: 90%; */
	}
}
</style>
