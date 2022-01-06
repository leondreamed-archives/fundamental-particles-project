<script setup lang="ts">
import { computed } from 'vue';
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
	<div>{{ leftoverParticles }}</div>
</template>
