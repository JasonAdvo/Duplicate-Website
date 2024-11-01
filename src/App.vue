<template>



	<div id="app">
		<div style="width: 20%;" class="Left_Banner">
			<Left_Banner />
		</div>

		<div style="width: 80%;" class="router_view">
			<router-view></router-view>

		</div>
	</div>




</template>

<script>
import Left_Banner from './components/Left_Banner.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default {
	components: {
		Left_Banner
	},
	name: 'App'
}
</script>

<style scoped>
#app {
	display: flex;
}

@media screen and (max-width: 1000px) {
	.Left_Banner {
		display: none;
	}

	.router_view {
		width: 100% !important;
	}
}
</style>
