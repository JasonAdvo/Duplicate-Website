<template>
	<div class="Right_Banner_Container">
		<div class="RB_Imgs">
			<img src="/Images/RB_Img_1.webp" alt="">
			<div class="RB_Login_Register_Btn_Container">
				<img src="/Images/RB_Login_Img.gif" alt="">
				<img src="/Images/RB_Register_Img.gif" alt="">
			</div>
			<div style="display: flex; margin-bottom: 50px">
				<div class="RB_Small_Text_Container">
					<div class="Baki">
						<p>Baki:</p>
						<p><strong>RM0.00</strong></p>
					</div>
					<p>Deposit Minimum: </p>
					<p><strong>RM0.00</strong></p>
					<p>Withdraw Minimum: <strong>RM25.00</strong></p>
				</div>
				<div class="RB_Cash_Btn_Container">
					<img src="/Images/RB_Deposit_Img.gif" alt="">
					<img src="/Images/RB_WithDraw_Img.gif" alt="">
					<img src="/Images/RB_Refresh_Img.gif" alt="">
				</div>
			</div>
			<img src="/Images/RB_Img_2.gif" alt="">
			<img src="/Images/RB_Img_3.webp" alt="">
			<img src="/Images/LB_Img_1.gif" alt="">
			<img src="/Images/LB_Img_6.gif" alt="">
		</div>
	</div>
</template>


<script>
export default {
	name: 'RightBanner'
};
</script>

<style scoped>
.Right_Banner_Container {
	background: rgba(0, 0, 0, .3);
	padding: 0px 15px 30px 15px;
	height: 100%;
}


.RB_Imgs img {
	max-width: 100%;
	margin-bottom: 16px;
}

.RB_Login_Register_Btn_Container {
	display: flex;
}

.RB_Login_Register_Btn_Container img {
	width: 50%;
	padding: 0 10px 30px;
	margin-bottom: 0px;
}

.RB_Small_Text_Container {
	display: flex;
	flex-direction: column;
	width: 50%;
}

.RB_Small_Text_Container p {
	color: rgb(2, 47, 138);
	font-size: 16px;
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
	margin-bottom: 20px;
}

.RB_Cash_Btn_Container {
	width: 50%;
}

.RB_Cash_Btn_Container img {
	width: 90%;
}
</style>