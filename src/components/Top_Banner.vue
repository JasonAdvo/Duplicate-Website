<template>
	<div class="Top_Banner_Container">
		<img class="TopBanner" src="/Images/TopBanner_Img.png" alt="">
		<img class="TR_Img" src="/Images/TopBanner_Right_Img.png" alt="">
	</div>
</template>

<script>
export default {
	name: 'TopBanner'
};
</script>

<style scoped>
.Top_Banner_Container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 90px;
	overflow: hidden;
}

@media screen and (max-width: 620px) {
	.Top_Banner_Container {
		height: 50px;
	}
}

.TopBanner {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
}

.TR_Img {
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
	max-width: 60px;
}
</style>
