<template>
	<div class="accordion">
		<div class="accordion-header" @click="toggleAccordion">
			<slot name="header">
				{{ title }}
			</slot>
			<span class="accordion-arrow">{{ isOpen ? '-' : '+' }}</span>
		</div>

		<!-- Updated transition and using v-show for smooth collapse -->
		<transition name="accordion">
			<div v-show="isOpen" class="accordion-body">
				<slot name="body">
					{{ content }}
				</slot>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Accordion Header',
		},
		content: {
			type: String,
			default: 'Accordion content here',
		},
		isOpen: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		toggleAccordion() {
			// Emit the 'toggle' event to the parent
			this.$emit('toggle');
		},
	},
};
</script>

<style scoped>
.accordion {
	border: none;
	margin-bottom: 0;
}

.accordion-header {
	background: #f7f7f7;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
	font-weight: bold;
	border: none;
	margin: 0;
}

.accordion-arrow {
	font-size: 1.5rem;
}

.accordion-body {
	padding: 10px 20px;
	background-color: #fff;
	border: none;
	max-height: 0;
	/* Start with max-height: 0 for closed state */
	overflow: hidden;
	transition: max-height 0.3s ease, padding 0.3s ease;
}

/* Add smooth transitions for entering and leaving */
.accordion-enter-active,
.accordion-leave-active {
	transition: all 0.3s ease-in-out;
}

.accordion-enter-from,
.accordion-leave-to {
	max-height: 0;
	opacity: 0;
	overflow: hidden;
}

/* When accordion is open, we set a max-height that can accommodate the content */
.accordion-body[style*="max-height"] {
	max-height: 200px;
	/* Adjust max-height based on the content */
	opacity: 1;
}

/* Active header style */
.accordion-header.active {
	background-color: #e0e0e0;
}
</style>
