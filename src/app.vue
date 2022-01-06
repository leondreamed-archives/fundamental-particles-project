<script setup lang="ts">
import ParticleDock from './components/particle-dock.vue';
import ParticleGrid from './components/particle-grid.vue';
</script>

<template>
	<div class="grid grid-rows-[2fr_1fr] h-full">
		<ParticleGrid class="m-auto" />
		<ParticleDock />
	</div>
</template>

<style>
html,
body {
	height: 100%;
	margin: 0;
}

#app {
	height: 100%;
}
</style>
