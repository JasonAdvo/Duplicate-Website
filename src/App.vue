<template>



	<div id="app">
		<div style="width: 20%;">
			<Left_Banner />
		</div>

		<div style="width: 80%;">
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
</style>
