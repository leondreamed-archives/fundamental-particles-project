<script setup lang="ts">
import { computed, defineProps } from 'vue';
import ParticleBubble from './particle-bubble.vue';
import { useAppStore } from '~/store/app';
import type { ParticleId } from '~/types/particles';
import { isParticleDrop } from '~/utils/particle-drop';
import { expectedParticles } from '~/utils/particle-grid';
import { particlesInformation } from '~/utils/particles';

const props = defineProps<{
	currentParticleId: ParticleId | undefined;
	column: number;
	row: number;
}>();
const expectedParticleInfo = computed(
	() =>
		particlesInformation[
			[expectedParticles[props.row]![props.column]!].flat()[0]!
		]
);

const particleTypeToContainerClasses: Record<ParticleType, string> = {
	boson: 'border-red-300 bg-red-100',
	lepton: 'border-green-300 bg-green-100',
	quark: 'border-purple-300 bg-purple-100',
};
const genericContainerClasses = 'bg-gray-100 border-gray-200';

const store = useAppStore();

function onDrop(event: DragEvent) {
	const dropData = event.dataTransfer?.getData('data') ?? '';
	if (dropData !== '') {
		const data = JSON.parse(dropData) as unknown;
		if (isParticleDrop(data)) {
			store.setParticleGridCell({
				particleId: data.payload.particleId,
				column: props.column,
				row: props.row,
			});
		}
	}
}
</script>

<template>
	<div
		class="rounded-md m-2 h-40 w-40 border-2 column justify-between"
		:class="
			currentParticleId === undefined
				? genericContainerClasses
				: particleTypeToContainerClasses[expectedParticleInfo.type]
		"
		@drop.prevent="onDrop"
		@dragover.prevent
	>
		<div class="row justify-between text-xs p-2">
			<span><strong>Charge:</strong> {{ expectedParticleInfo.charge }}</span>
			<span><strong>Spin:</strong> {{ expectedParticleInfo.spin }}</span>
		</div>

		<ParticleBubble
			v-if="currentParticleId !== undefined"
			class="self-center"
			:particle-id="currentParticleId"
		/>

		<div class="text-center text-sm pb-1">
			<strong>Mass: </strong>
			<!-- eslint-disable-next-line vue/no-v-html -->
			<span v-html="expectedParticleInfo.mass"></span>
		</div>
	</div>
</template>
