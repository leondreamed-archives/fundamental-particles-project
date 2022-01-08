<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import ParticleDock from '~/components/particle-dock.vue';
import ParticleGrid from '~/components/particle-grid.vue';
import { useAppStore } from '~/store/app';
import { createConfetti } from '~/utils/confetti';
import GameHeader from '~/components/game-header.vue';

const store = useAppStore();
const route = useRoute();
if (route.query.mode === 'hard') {
	store.hardMode = true;
}

store.startGame();

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
	store.isComplete = false;
});
</script>

<template>
	<div class="column h-full">
		<GameHeader />
		<ParticleGrid class="m-auto" />
		<ParticleDock class="flex-shrink-0" />
	</div>
</template>
