<template>
	<div>
		<TopBanner />
	</div>

	<div class="main-content">
		<div class="col-sm-12 col-lg-3">
			<LeftBanner />
		</div>
		<!-- Middle Blank Column -->

		<div class="Middle_Banner_Container col-lg-6">
			<div class="Middle_Inner_Container">
				<ul class="Top_Btn_Container">
					<li class="Top_Btn" v-for="(item, index) in menuItems" :key="index"
						:class="{ 'active': selectedItem === index }" @click="selectItem(index)">
						{{ item }}
					</li>
				</ul>
				<div class="MB_Img_Gallery">
					<div class="MB_Img">
						<img src="/Images/MB_Img.png" alt="" v-for="n in 40" :key="n">
					</div>
				</div>
				<h1>100Cuci: The Trusted Top Online Casino in Malaysia</h1>
				<p>
					Welcome to <strong><a href="https://100cuci.info/">100Cuci</a></strong>,
					one of the top local online casinos in Malaysia. Whether you’re a pro
					or just starting out, we’ve got something waiting for you. Sign up and
					play
				</p>
				<h2>100Cuci Game Online Selection</h2>
				<p>We offer a diverse range of games to suit every preference. Let’s check it out!</p>
				<h3>Slot Game</h3>
				<p>
					<strong>100Cuci slot</strong> game is one of the most popular games on
					our platform. We have more than a hundred slot games with high RTP for
					you to play. You may find popular slot game providers like Jili, JDB,
					918Kiss, and Mega888.
				</p>
				<h3>Live Casino</h3>
				<p>
					Step into the <strong>100Cuci live</strong> casino game! We have a wide
					range of live casino games like blackjack, roulette, baccarat, and
					poker. You can also interact with our friendly dealers and play in real
					time.
				</p>
				<p>
					Most of the games are accessible via browsers, so you can enjoy all the
					100cuci game online without downloading any app!
				</p>
				<h2>100Cuci Free Credit Bonus</h2>
				<p>
					There is various exciting bonuses waiting you, claim it now at
					<strong>100Cuci Casino Malaysia</strong>
				</p>
				<ul>
					<li>New Register Free RM5 with no turnover and rollover.</li>
					<li>RM2 <strong>100Cuci Free Credit</strong> for 365 days with daily 1 times.</li>
					<li>Free Spin with just RM1 deposit only</li>
				</ul>
				<h2>Supported Payment Method</h2>
				<p>
					<strong>100Cuci Asia</strong> offers a variety of payment options for
					Malaysian players. From popular e-wallets like GrabPay and Touch ‘n Go
					to online banking transfers via Maybank, CIMB, and Public Bank. You can
					always enjoy fast and secure deposits with no withdrawal limit in
					100Cuci casino online!
				</p>
				<h2>Get Started 100Cuci Net</h2>
				<p>There are just a few simple steps to start your online casino experience with us, check it out:</p>
				<ol>
					<li>Visit our official website: <strong>100cuci.info</strong></li>
					<li>Sign up for an account with a phone number.</li>
					<li>Access <strong>100Cuci log in</strong> to claim free credits if newly registered players.</li>
					<li>Explore all the casino games.</li>
					<li>Start playing the 100Cuci game online and win real money.</li>
					<li>Withdraw your winning from <strong>100Cuci ewallet</strong>.</li>
				</ol>
				<p>
					Remember, join the 100Cuci Telegram group to get the latest bonus or news
					update.
				</p>
				<p>
					As a leading online casino in Malaysia, Cuci100 caters to the unique
					preferences of players in the region. We constantly offer an exciting
					gaming experience for all our players. Sign up and claim
					<strong>100Cuci free kredit</strong> now!
				</p>
				<p>
					<strong>Address office</strong>: 326, Jln Sepakat 8, Taman United, 58200
					Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia
				</p>
				<a class="google-map-link" href="https://maps.app.goo.gl/Yk1sdaktbaEaZXDD6" target="_blank">
					<strong>https://maps.app.goo.gl/Yk1sdaktbaEaZXDD6</strong>
				</a>
				<div class="map-container">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3984.05116838465!2d101.674628!3d3.081017!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2smy!4v1720752722021!5m2!1sen!2smy"
						width="200" height="100" style="border:0;" allowfullscreen="" loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<p><img src="/Images/MM_Img_1.png" alt=""></p>
				<p><strong>Learn more about our big parner:</strong></p>
				<p><a class="platform" href="https://www.winbox88my1.com/winbox-login" target="_blank"><strong>Winbox
							Login</strong></a> 3.0
					| Winbox Mobile Login 2024 | Winbox88 H5 | Winbox Mobile Login 2024, access Winbox H5 3.0 Web
					Version now. No download needed, Winbox88 casino is your best choice being the top casino game
					provider in Malaysia.
				</p>
				<p>OFFICIAL <a class="platform" href="https://www.winbox8.my/"><strong>WINBOX</strong></a> 2024 |
					Winbox88. Top leading Online Casino in Malaysia 2024. Play with Winbox games for all Playtech, Lion
					King, Lucky365, SBObet, Maxbet, KingMaker, Spade Gaming, AE Sexy and other well-known gaming
					provider brands. With a single account, you may bet on dozens of odds over thousands of games.
				</p>
			</div>
		</div>

		<!-- Right Banner Column -->
		<div class="col-sm-12 col-lg-3">
			<RightBanner />
		</div>
	</div>

	<div class="Mobile_Middle_Banner" style="display: none">
		<img src="/Images/LB_Img_1.gif" alt="">
		<img src="/Images/LB_Img_2.webp" alt="">
		<img src="/Images/LB_Img_3.png" alt="">
		<img src="/Images/LB_Img_4.png" alt="">
		<img src="/Images/RB_Img_1.webp" alt="">
		<div class="MM_Login_Register_Btn_Container">
			<img src="/Images/RB_Login_Img.gif" alt="">
			<img src="/Images/RB_Register_Img.gif" alt="">
		</div>
		<div style="display: flex; margin-bottom: 50px; justify-content: space-between;">
			<div class="MM_Small_Text_Container">
				<p>Baki: <br><strong>RM0.00</strong> </p>
				<p>Deposit Minimum: <br><strong>RM0.00</strong></p>
				<p>Withdraw Minimum: <br><strong>RM25.00</strong></p>
			</div>
			<div class="RB_Cash_Btn_Container">
				<img src="/Images/RB_Deposit_Img.gif" alt="">
				<img src="/Images/RB_WithDraw_Img.gif" alt="">
				<img src="/Images/RB_Refresh_Img.gif" alt="">
			</div>
		</div>
		<img src="/Images/RB_Img_2.gif" alt="">
		<img src="/Images/LB_Img_1.gif" alt="">
		<img src="/Images/LB_Img_6.gif" alt="">
		<img src="/Images/LB_Img_7.webp" alt="">
		<div class="MM_Small_Btn_Container">
			<img src="/Images/LB_Share_Img.gif" alt="">
			<img src="/Images/LB_DL_Img.gif" alt="">
			<img src="/Images/LB_CL_Img.gif" alt="">
		</div>
		<img src="/Images/LB_Img_8.png" alt="">
		<img src="/Images/LB_Img_9.png" alt="">
		<img src="/Images/LB_Img_10.gif" alt="">
		<img style="margin-bottom: 0px;" src="/Images/LB_Img_11.gif" alt="">
	</div>
</template>

<script>
import LeftBanner from '/src/components/Left_Banner.vue';
import RightBanner from '/src/components/Right_Banner.vue';
import TopBanner from '/src/components/Top_Banner.vue';

export default {
	components: {
		LeftBanner,
		RightBanner,
		TopBanner,
	},
	data() {
		return {
			menuItems: ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5'],
			selectedItem: 0,
		};
	},
	methods: {
		selectItem(index) {
			this.selectedItem = index;
		},
	},
};
</script>

<style scoped>
@media screen and (max-width: 620px) {
	.Mobile_Middle_Banner {
		display: flex !important;
		flex-direction: column;
	}

	.Left_Banner_Container,
	.Right_Banner_Container {
		display: none !important;
	}
}

.main-content {
	margin-top: 100px;
	display: flex;
}

.Mobile_Middle_Banner {
	margin-top: 10px;
	position: absolute;
	right: 0;
	top: 45px;
	width: 100%;
	background: rgba(0, 0, 0, .3);
	padding: 0 15px 30px;
}

.Mobile_Middle_Banner img {
	width: 100%;
	margin-bottom: 15px;
}

.MM_Login_Register_Btn_Container img {
	width: 50%;
	padding: 0 1px;

}

.MM_Small_Text_Container p {
	font-size: 12px;
}

.MM_Small_Btn_Container {
	display: flex;
	flex-wrap: wrap;
}

.MM_Small_Btn_Container img {
	width: 50%;
	margin-bottom: 2px
}

.Middle_Banner_Container {
	margin: 0 auto;
	/* width: 50%; */
	/* position: absolute; */
	/* top: 100px;
	left: 25%; */
	padding: 0px 15px 30px;
}

.Top_Btn_Container {
	list-style-type: none;
	padding: 0;
	margin: 0;
	display: flex;
}

.Top_Btn {
	cursor: pointer;
	padding: 2px 9.8px;
	border: none;
	background-color: transparent;
	font-size: 13px;
	font-weight: 700;
	transition: background-color 0.3s, color 0.3s;
	border-radius: 20px;
}

.active {
	background-color: rgb(49, 205, 132);
	color: white;
	border-radius: 20px;
}

.MB_Img_Gallery {
	margin: 10px -15px 0px;
}

.MB_Img img {
	width: 16.667%;
	padding: 0 15px 30px;
}

.Middle_Inner_Container a {
	padding: 0;
	color: rgba(13, 110, 253);
}

.google-map-link {
	font-style: italic;
	color: #f0d843 !important;
	font-weight: bolder;
}

.map-container {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 20px 0;
}

.platform {
	color: #f0d843 !important;
}
</style>
