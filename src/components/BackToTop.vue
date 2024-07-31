<template>
	<transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
		<div v-if="visible" class="back-to-top" @click="scrollToTop">
			↑
		</div>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			visible: false,
			timeout: null,
			scrollTimer: null,
		};
	},
	methods: {
		scrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		},
		handleScroll() {
			// Show the button when scrolling up or down
			if (window.scrollY > 100) {
				this.visible = true;

				// Clear existing timeout if any
				if (this.timeout) {
					clearTimeout(this.timeout);
				}

				// Set a new timeout to hide the button after 3 seconds of no scrolling
				this.timeout = setTimeout(() => {
					this.visible = false;
				}, 3000);
			} else {
				this.visible = false;
			}

			// Reset the timeout if scrolling
			if (this.scrollTimer) {
				clearTimeout(this.scrollTimer);
			}

			this.scrollTimer = setTimeout(() => {
				this.visible = false;
			}, 3000);
		},
		beforeEnter(el) {
			el.style.opacity = 0;
		},
		enter(el, done) {
			el.offsetHeight; // Trigger reflow
			el.style.transition = 'opacity 0.5s';
			el.style.opacity = 1;
			done();
		},
		leave(el, done) {
			el.style.transition = 'opacity 0.5s';
			el.style.opacity = 0;
			done();
		},
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	},
};
</script>

<style scoped>
.back-to-top {
	position: fixed;
	bottom: 80px;
	right: 20px;
	background-color: rgba(0, 0, 0, 0.7);
	/* Black background with 70% opacity */
	color: #ffd700;
	/* Gold color */
	width: 50px;
	/* Width of the button */
	height: 50px;
	/* Height of the button */
	border-radius: 50%;
	/* Makes the button round */
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	/* Size of the icon */
	cursor: pointer;
	opacity: 0.7;
	/* Button opacity */
	transition: opacity 0.3s, background-color 0.3s;
	border: 3px solid #ffd700;
	/* Gold border */
}

.back-to-top:hover {
	opacity: 1;
	background-color: rgba(0, 0, 0, 0.9);
	/* Darker background on hover for better visibility */
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
	{
	opacity: 0;
}
</style>
