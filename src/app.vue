<script setup lang="ts">
import { watch } from 'vue';
import ParticleDock from './components/particle-dock.vue';
import ParticleGrid from './components/particle-grid.vue';
import { useAppStore } from './store/app';
import { createConfetti } from './utils/confetti';

const store = useAppStore();

// Shoot confetti when the game is completed
watch(
	() => store.isComplete,
	async (isComplete) => {
		if (isComplete) {
			await createConfetti();
		}
	}
);

// Reset errors when the grid changes
watch(store.particleGrid, () => {
	store.highlightErrors = false;
});
</script>

<template>
	<div class="column h-full">
		<ParticleGrid class="m-auto" />
		<ParticleDock />
	</div>
</template>

<style>
html,
body {
	height: 100%;
	margin: 0;
	user-select: none;
}

#app {
	height: 100%;
}
</style>
