<template>
	<div class="footer-menu">
		<div class="relative" style="width: 100%;">
			<div class="social-media-container">
				<a href="/" rel="nofollow" class="social-media-icon">
					<img src="/images/Subscribe_Us_Img.gif" alt="Subscribe">
				</a>
				<a href="/" rel="nofollow" class="social-media-icon">
					<img src="/images/Trusted_Site_Img.gif" alt="Trusted">
				</a>
			</div>

			<div v-if="isVisible" class="Btm-Popup_Container">
				<i class="ic-close-circle fas fa-times" @click="closePopup"></i> <!-- Font Awesome cross icon -->
				<a href="/" rel="nofollow">
					<img src="/images/Btm_Pop_Up_Img.webp" alt="Join Us Now">
				</a>
			</div>

			<div class="footer-content">
				<div class="d-f col">
					<a :href="winbox_link" rel="nofollow" target="_blank">
						<img src="/images/Btm_Home_Img.webp" alt="Home">
					</a>
				</div>
				<div class="d-f col">
					<a href="/" rel="nofollow" target="_blank">
						<img src="/images/Btm_History_Img.webp" alt="History">
					</a>
				</div>
				<div class="d-f col">
					<a href="/" rel="nofollow" target="_blank">
						<img src="/images/Btm_Promo_Img.webp" alt="Bonus">
					</a>
				</div>
				<div class="d-f col">
					<a href="/" rel="nofollow" target="_blank">
						<img src="/images/Btm_Live_Img.webp" alt="Live Chat">
					</a>
				</div>
				<div class="d-f col">
					<a href="/" rel="nofollow" target="_blank">
						<img src="/images/Btm_Setting_Img.webp" alt="Setting">
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'FooterMenu',
	data() {
		return {
			isVisible: true, // Set this to control visibility
			winbox_link: ''
		};
	},
	methods: {
		closePopup() {
			this.isVisible = false;
		},
		async fetchLink() {
			try {
				const response = await axios.get("https://seo.mobileapplab.online/api/winbox?fields[0]=winboxofficial_my", {
					headers: {
						"Authorization": "Bearer " + "e2e085a70abb572e2ad3118cf0c3749024fc7342f873874a3cfc95f6520e4f561a3656113097ce0fea85186a91a42c56799bd153626b51f36c83bcf5c02e9996cc56106cb88a85ea4c4d58b4e1713dcc2c5006c666d09110e741081c80562cc29b6490fa8125037afdf61b783ebfd01e41152c0f61803009ad98eded56aa6568"
					}
				});
				this.winbox_link = response.data.data.attributes.winboxofficial_my;
				// console.log(this.winbox_link)

				const response_winbox77 = await axios.get("https://seo.mobileapplab.online/api/winbox?fields[0]=winbox77_my", {
					headers: {
						"Authorization": "Bearer " + "e2e085a70abb572e2ad3118cf0c3749024fc7342f873874a3cfc95f6520e4f561a3656113097ce0fea85186a91a42c56799bd153626b51f36c83bcf5c02e9996cc56106cb88a85ea4c4d58b4e1713dcc2c5006c666d09110e741081c80562cc29b6490fa8125037afdf61b783ebfd01e41152c0f61803009ad98eded56aa6568"
					}
				});
				this.winbox77_link = response_winbox77.data.data.attributes.winbox77_my;
			} catch (error) {
				console.log(error)
			}
		},
	},
	mounted() {
		this.fetchLink();
	}
};
</script>

<style scoped>
.footer-menu {
	display: flex;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 55px;
	background-image: url('/images/Btm_Bg_Img.webp');
	background-size: 100% 100%;
}

.relative {
	position: relative;
	z-index: 1;
}

.social-media-container {
	display: flex;
	flex-direction: column;
	position: absolute;
	top: -500%;
	right: 0;
}

.social-media-icon {
	margin-bottom: 5px;
}

.footer-content {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100%;
}

.d-f {
	display: flex;
	justify-content: center;
}

.col {
	flex: 1;
	text-align: center;
}

.col img {
	width: 60px;
	height: auto;
}

@media screen and (max-width: 321px) {
	.col img {
		width: 30px;
	}
}

.social-media-icon img {
	width: 20px;
	height: 108px;
}

.Btm-Popup_Container {
	position: absolute;
	bottom: 55px;
	padding-top: 30px;
}

.Btm-Popup_Container img {
	width: 500px;
}

@media screen and (max-width: 430px) {
	.Btm-Popup_Container img {
		width: 100%;
	}
}

.ic-close-circle {
	display: flex;
	justify-content: center;
	border: 2px solid #fff;
	border-radius: 100%;
	padding: 4px;
	width: 28px;
	height: 28px;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
}

.fa-times::before {
	color: white;
}
</style>
