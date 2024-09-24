<template>
	<div class="Right_Banner_Container">
		<div class="RB_Imgs">
			<a :href="link_winbox + 'winbox-register'" rel="nofollow"><img style="margin-bottom: 16px;"
					src="/images/Bonus_93.gif" alt="Marc Marquez 93% Bonus"></a>
			<div class="login-register-container">
				<a :href="link_winbox + 'winbox-login'" rel="nofollow"><img class="Join" src="/images/RB_Login_Img.webp"
						alt="Login"></a>
				<a :href="link_winbox + 'winbox-register'" rel="nofollow"><img class="Register"
						src="/images/RB_Register_Img.webp" alt="Register"></a>
			</div>
			<div class="RB_Info_Container" style="display: flex; margin-bottom: 23px">
				<div class="RB_Small_Text_Container">
					<div class="Baki">
						<p>{{ $t('message.balance') }} </p>
						<p><strong>0.00</strong></p>
					</div>
					<p>{{ $t('message.Min_Deposit') }} <strong>RM1.00</strong></p>
					<p>{{ $t('message.Min_Withdrawal') }} <strong>RM20.00</strong></p>
				</div>
				<div class="RB_Cash_Btn_Container">
					<a :href="link_winbox + 'winbox-register'" rel="nofollow">
						<img src="/images/RB_Deposit_Img.gif" alt="Deposit">
					</a>
					<a :href="link_winbox + 'winbox-register'" rel="nofollow">
						<img src="/images/RB_Withdraw_Img.gif" alt="Withdraw">
					</a>
					<a href="/">
						<img src="/images/RB_Refresh_Img.gif" alt="Refresh">
					</a>
				</div>
			</div>

			<div class="Tablet-Mobile-view">
				<img src="/images/LB_Img_2.webp" alt="Share Bonus">
				<div class="button-grp">
					<a :href="link_winbox + 'winbox-register'" rel="nofollow"><img class="button_width"
							src="/images/LB_Share_Img.gif" alt="Share"></a>
					<a :href="link_winbox + 'winbox-register'" rel="nofollow"><img class="button_width"
							src="/images/LB_Downline_Img.gif" alt="Downline"></a>
					<a :href="link_winbox + 'winbox-register'" rel="nofollow"><img class="button_width"
							src="/images/LB_Copy_Img.gif" alt="Copy"></a>
					<a :href="link_winbox + 'winbox-register'" rel="nofollow"><img class="button_width"
							src="/images/LB_More_Img.gif" alt="More"></a>
				</div>

				<a :href="link_winbox + 'winbox-register'" rel="nofollow"><img style="margin-top: 20px;"
						src="/images/Turnover Bonus.webp" alt="Turnover Bonus"></a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'RightBanner',
	computed: {
		...mapGetters(['link_winbox', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_winbox');
	}

};
</script>

<style scoped>
.Right_Banner_Container {
	background: rgba(0, 0, 0, .3);
	padding: 10px 15px 0px 15px;
	height: 100%;
	border-left: 1px solid rgba(255, 255, 255, .5);
}

@media screen and (max-width: 430px) {
	.Right_Banner_Container {
		padding: 0 15px 0px 15px;
		border-left: unset;
	}

	.login-register-container {
		padding-top: 0px !important;
	}

}

.RB_Imgs img {
	width: 100%;
}

.RB_Info_Container {
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: bottom;
}

.RB_Cash_Btn_Container {
	width: 50%;
	text-align: right;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 5px;
}

.RB_Cash_Btn_Container img {
	height: 44px;
	width: 130px;
	margin-bottom: 5px;
}

.login-register-container {
	display: flex;
	margin-bottom: 16px;
	justify-content: space-between;
}

.login-register-container img {
	border-radius: 0%;
}

.Join {
	padding-right: 5px;
}

.Register {
	padding-left: 5px;
}

.RB_Small_Text_Container {
	width: 50%;
}

.RB_Small_Text_Container p {
	color: white;
	font-size: 15px;
	font-weight: 400;
	font-family: Lato, sans-serif;
	margin-bottom: 0;
}

.RB_Small_Text_Container strong {
	font-weight: bold !important;
}

.Baki {
	display: flex;
	flex-direction: column;
	margin-bottom: 7px;
}

.Baki p {
	margin: 5px 0;
}

.Baki strong {
	color: #07a6fb;
	font-size: 30px;
}

.Tablet-Mobile-view {
	display: none;
}

@media screen and (max-width: 1000px) {
	.Tablet-Mobile-view {
		display: flex !important;
		flex-direction: column;
	}

	.RB_Cash_Btn_Container img {
		width: 80%;
		height: 100%;
	}

	.RB_Cash_Btn_Container a {
		height: 80px;
	}

	.RB_Small_Text_Container {
		justify-content: space-between;
	}

	.RB_Small_Text_Container p {
		font-size: 30px;
	}

	.Baki strong {
		font-size: 40px;
	}
}

@media screen and (max-width: 430px) {
	.RB_Small_Text_Container p {
		font-size: 14px;
	}

	.RB_Cash_Btn_Container a {
		height: 40px;
	}

	.Baki strong {
		font-size: 30px;
	}

	.button-grp img {
		width: 100% !important;
	}
}

.button-grp {
	margin-top: -24%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
}

.button-grp a {
	width: calc(50% - 8px);
}

.button_width {
	width: 100%
}

.button-grp img {
	width: 100%;
	padding: 0 5px;
	margin-bottom: 8px;
}
</style>