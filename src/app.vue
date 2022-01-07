<script setup lang="ts">
import confetti from 'canvas-confetti';
import { onMounted, ref, watch } from 'vue';
import ParticleDock from './components/particle-dock.vue';
import ParticleGrid from './components/particle-grid.vue';
import { useAppStore } from './store/app';

const store = useAppStore();
const confettiCanvas = ref();
onMounted(() => {
	store.createConfetti = confetti.create(confettiCanvas.value, {
		resize: true,
		useWorker: true,
	});
});

watch(
	() => store.isComplete,
	async (isComplete) => {
		if (isComplete) {
			await store.shootConfetti();
		}
	}
);
</script>

<template>
	<div class="column h-full">
		<ParticleGrid class="m-auto" />
		<ParticleDock />
	</div>
	<canvas ref="confettiCanvas"></canvas>
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
