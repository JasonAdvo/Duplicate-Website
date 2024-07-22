<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<img src="/Images/LB_Img_1.gif" alt="">
			<img src="/Images/LB_Img_2.webp" alt="">
			<img src="/Images/LB_Img_3.png" alt="">
			<img src="/Images/LB_Img_4.png" alt="">
			<img src="/Images/LB_Img_5.gif" alt="">
			<img src="/Images/LB_Img_6.gif" alt="">
			<img src="/Images/LB_Img_7.webp" alt="">
			<div class="LB_Small_Btn_Container">
				<img src="/Images/LB_Share_Img.gif" alt="">
				<img src="/Images/LB_DL_Img.gif" alt="">
				<img src="/Images/LB_CL_Img.gif" alt="">
			</div>
			<img src="/Images/LB_Img_8.png" alt="">
			<img src="/Images/LB_Img_9.png" alt="">
			<img src="/Images/LB_Img_10.gif" alt="">
			<img src="/Images/LB_Img_11.gif" alt="">
		</div>
	</div>
</template>

<script>
export default {
	name: 'LeftBanner'
};
</script>

<style scoped>
.Left_Banner_Container {
	background: rgba(0, 0, 0, .3);
	padding: 0px 15px 30px 15px;
	height: 100%;
}

.LB_Imgs img {
	max-width: 100%;
	margin-bottom: 16px;
}

.LB_Small_Btn_Container {
	display: flex;
	flex-flow: row wrap;
}

.LB_Small_Btn_Container img {
	width: 50%;
	margin-bottom: 1px;
}
</style>
