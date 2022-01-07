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
import { getParticleInfo } from '~/utils/particles';
import { getExpectedParticleIds } from '~/utils/particle-grid';

const props = defineProps<{
	currentParticleId: ParticleId | undefined;
	column: number;
	row: number;
}>();
const expectedParticleId = computed(
	() => getExpectedParticleIds({ row: props.row, column: props.column })[0]!
);
const expectedParticleInfo = computed(() =>
	getParticleInfo(expectedParticleId.value)
);

const emptyContainerClasses: Record<
	ParticleType,
	{ bg: string; border: string }
> = {
	boson: {
		bg: 'bg-orange-50',
		border: 'border-orange-50',
	},
	lepton: {
		bg: 'bg-cyan-50',
		border: 'border-cyan-50',
	},
	quark: {
		bg: 'bg-purple-50',
		border: 'border-purple-50',
	},
};
const occupiedContainerClasses: Record<
	ParticleType,
	{ bg: string; border: string }
> = {
	boson: {
		bg: 'bg-orange-50',
		border: 'border-orange-200',
	},
	lepton: {
		bg: 'bg-cyan-50',
		border: 'border-cyan-200',
	},
	quark: {
		bg: 'bg-purple-50',
		border: 'border-purple-200',
	},
};

const correctBorder = 'border-green-500';
const errorBorder = 'border-red-500';

const staticClasses = 'cursor-grab';
const particleContainerClasses = computed(() => {
	let borderClass: string;
	let bgClass: string;

	// If the cell is empty
	if (props.currentParticleId === undefined) {
		if (expectedParticleId.value === 'higgsBoson') {
			borderClass = 'border-yellow-100';
			bgClass = 'bg-yellow-50';
		} else {
			const { bg, border } =
				emptyContainerClasses[expectedParticleInfo.value.type];
			borderClass = border;
			bgClass = bg;
		}
	}
	// If the cell is occupied
	else {
		// eslint-disable-next-line no-lonely-if
		if (expectedParticleId.value === 'higgsBoson') {
			bgClass = 'bg-yellow-100';
			borderClass = 'bg-yellow-100';
		} else {
			const { bg, border } =
				occupiedContainerClasses[expectedParticleInfo.value.type];
			bgClass = bg;
			borderClass = border;
		}
	}

	// Override border class if error
	if (store.highlightErrors) {
		if (props.currentParticleId === undefined) borderClass = errorBorder;
		borderClass =
			props.currentParticleId === expectedParticleId.value
				? correctBorder
				: errorBorder;
	}

	return `${staticClasses} ${borderClass} ${bgClass}`;
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
		class="p-2"
		:draggable="currentParticleId !== undefined"
		@dragstart="onDragStart"
		@drop.prevent="onDrop"
		@dragover.prevent
	>
		<div
			class="rounded-md h-40 w-40 border-2 column justify-between"
			:class="particleContainerClasses"
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
	</div>
</template>
