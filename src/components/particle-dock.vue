<script setup lang="ts">
import { computed } from 'vue';
import ParticleBox from './particle-box.vue';
import { useAppStore } from '~/store/app';
import { fundamentalParticles } from '~/utils/particles';

const store = useAppStore();

const leftoverParticles = computed(() =>
	fundamentalParticles.filter(
		(particle) => !store.particleGrid.flat().includes(particle)
	)
);
</script>

<template>
	<div
		class="row flex-wrap content-start bg-white border-top-2 border-gray-200 z-1 p-10 justify-center"
	>
		<div v-for="particleId of leftoverParticles" :key="particleId">
			<ParticleBox :particle-id="particleId" />
		</div>
	</div>
</template>
