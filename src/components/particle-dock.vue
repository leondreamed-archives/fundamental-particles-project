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
		class="column items-center pb-5 pt-3 bg-white border-t-2 border-gray-200 max-h-[50vh] overflow-y-auto"
		@drop.prevent="onDrop"
		@dragover.prevent
	>
		<div
			class="row flex-wrap content-start z-1 justify-center"
			:class="{ 'mb-3': leftoverParticles.length > 0 }"
		>
			<div v-for="particleId of leftoverParticles" :key="particleId">
				<ParticleBox :particle-id="particleId" />
			</div>
		</div>
		<div class="row gap-3">
			<button
				class="font-bold text-white bg-green-500 px-5 py-2 rounded-md"
				@click="
					store.isComplete ? store.checkAnswers : () => store.createConfetti?.()
				"
			>
				{{ store.isComplete ? 'Congratulations!' : 'Check Answers' }}
			</button>
			<button
				:disabled="store.isGridEmpty"
				class="font-bold text-white px-5 p-2 rounded-md"
				:class="[
					store.isGridEmpty ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500',
				]"
				@click="store.reset"
			>
				Reset
			</button>
		</div>
	</div>
</template>
