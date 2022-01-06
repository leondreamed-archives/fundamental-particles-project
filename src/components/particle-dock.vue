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
	<div class="row flex-wrap justify-center">
		<div v-for="particleName of leftoverParticles" :key="particleName">
			<ParticleBox :particle-name="particleName" />
		</div>
	</div>
</template>
