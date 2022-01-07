<script setup lang="ts">
import { computed } from 'vue';
import ParticleBox from './particle-box.vue';
import { useAppStore } from '~/store/app';
import { fundamentalParticles } from '~/utils/particles';
import { isParticleDrop } from '~/utils/particle-drop';

const store = useAppStore();

const leftoverParticles = computed(() =>
	fundamentalParticles.filter(
		(particle) => !store.particleGrid.flat().includes(particle)
	)
);

function onDrop(event: DragEvent) {
	const dropData = event.dataTransfer?.getData('data') ?? '';
	if (dropData !== '') {
		const data = JSON.parse(dropData) as unknown;
		if (isParticleDrop(data)) {
			const { sourceCell } = data.payload;
			if (sourceCell !== undefined) {
				store.unsetParticleGridCell({
					column: sourceCell.column,
					row: sourceCell.row,
				});
			}
		}
	}
}
</script>

<template>
	<div
		class="row flex-wrap content-start bg-white border-t-2 border-gray-200 z-1 p-10 justify-center min-h-[20rem]"
		@drop.prevent="onDrop"
		@dragover.prevent
	>
		<div v-for="particleId of leftoverParticles" :key="particleId">
			<ParticleBox :particle-id="particleId" />
		</div>
	</div>
</template>
