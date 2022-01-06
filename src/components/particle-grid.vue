<script setup lang="ts">
import { computed } from 'vue';
import ParticleGridCell from './particle-grid-cell.vue';
import { useAppStore } from '~/store/app';

const store = useAppStore();

const particleGrid = computed(() => store.particleGrid);
</script>

<template>
	<div>
		<div v-for="(row, index) of particleGrid" :key="index" class="row">
			<div v-for="particleName of row" :key="particleName">
				<ParticleGridCell :particle-name="particleName" />
			</div>
		</div>
	</div>
</template>
