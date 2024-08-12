<template>
	<div id="app">
		<div ref="odometer" class="odometer">00000000</div>
	</div>
</template>

<script>
import 'odometer/themes/odometer-theme-slot-machine.css';
import Odometer from 'odometer';

export default {
	name: 'JackpotOdometer',
	data() {
		return {
			jackpot: 10000000, // Starting value for the jackpot
		};
	},
	mounted() {
		this.odometer = new Odometer({
			el: this.$refs.odometer,
			value: this.jackpot,
			format: '( ddd)', // Adjust the format as needed
			theme: 'slot-machine', // Theme, based on the CSS file you linked
			duration: 3000, // Animation duration in milliseconds
		});

		this.startOdometer();
	},
	methods: {
		startOdometer() {
			this.incrementJackpot();

			setInterval(() => {
				this.incrementJackpot();
			}, this.getRandomInterval());
		},
		incrementJackpot() {
			// Increment the jackpot by a random amount
			this.jackpot += Math.floor(Math.random() * 500) + 50; // Random increment between 50 and 550
			this.odometer.update(this.jackpot);
		},
		getRandomInterval() {
			return Math.floor(Math.random() * 5000) + 3000; // Random interval between 3000ms (3s) and 8000ms (8s)
		},
	},
};
</script>

<style scoped>
/* Odometer container styling */
.odometer {
	color: black;
	/* Number color */
}
</style>
