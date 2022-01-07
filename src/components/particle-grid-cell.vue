<script setup lang="ts">
import { computed } from 'vue';
import ParticleBubble from './particle-bubble.vue';
import { useAppStore } from '~/store/app';
import type {
	ParticleId,
	ParticleType,
	ParticleDropData,
} from '~/types/particles';
import { isParticleDrop } from '~/utils/particle-drop';
import { expectedParticles } from '~/utils/particle-grid';
import { getParticleInfo } from '~/utils/particles';

const props = defineProps<{
	currentParticleId: ParticleId | undefined;
	column: number;
	row: number;
}>();
const expectedParticleId = computed(
	() => [expectedParticles[props.row]![props.column]!].flat()[0]!
);
const expectedParticleInfo = computed(() =>
	getParticleInfo(expectedParticleId.value)
);

const particleTypeToContainerClasses: Record<ParticleType, string> = {
	boson: 'border-red-300 bg-red-100',
	lepton: 'border-green-300 bg-green-100',
	quark: 'border-purple-300 bg-purple-100',
};
const genericContainerClasses = 'bg-gray-100 border-gray-200';
const particleContainerClasses = computed(() => {
	if (props.currentParticleId === undefined) {
		return genericContainerClasses;
	}

	const staticClasses = 'cursor-grab';
	if (expectedParticleId.value === 'higgsBoson') {
		return `${staticClasses} border-yellow-300 bg-yellow-100`;
	}

	return `${staticClasses} ${
		particleTypeToContainerClasses[expectedParticleInfo.value.type]
	}`;
});

const store = useAppStore();

function onDrop(event: DragEvent) {
	const dropData = event.dataTransfer?.getData('data') ?? '';
	if (dropData === '') return;
	const data = JSON.parse(dropData) as unknown;
	if (isParticleDrop(data)) {
		const { payload } = data;
		if (payload.sourceCell !== undefined) {
			const { row: sourceRow, column: sourceColumn } = payload.sourceCell;
			const sourceParticleId = store.getParticleGridCell({
				column: sourceColumn,
				row: sourceRow,
			});

			// If there's a particle at the source cell, set the source particle to the current one
			if (sourceParticleId !== undefined) {
				// If there's a particle at the destination cell, then set the sourc
				if (props.currentParticleId === undefined) {
					store.unsetParticleGridCell({
						column: sourceColumn,
						row: sourceRow,
					});
				} else {
					store.setParticleGridCell({
						particleId: props.currentParticleId,
						column: sourceColumn,
						row: sourceRow,
					});
				}
			}
		}

		store.setParticleGridCell({
			particleId: data.payload.particleId,
			column: props.column,
			row: props.row,
		});
	}
}

function onDragStart(event: DragEvent) {
	if (props.currentParticleId !== undefined) {
		event.dataTransfer?.setData(
			'data',
			JSON.stringify<ParticleDropData>({
				type: 'particle-drop',
				payload: {
					particleId: props.currentParticleId,
					sourceCell: {
						row: props.row,
						column: props.column,
					},
				},
			})
		);
	}
}
</script>

<template>
	<div
		class="rounded-md m-2 h-40 w-40 border-2 column justify-between"
		:class="
			currentParticleId === undefined
				? genericContainerClasses
				: particleContainerClasses
		"
		:draggable="currentParticleId !== undefined"
		@dragstart="onDragStart"
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
