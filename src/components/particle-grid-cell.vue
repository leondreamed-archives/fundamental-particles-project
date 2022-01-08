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

const props = defineProps<{
	currentParticleId: ParticleId | undefined;
	column: number;
	row: number;
}>();
const answerParticleIds = computed(() =>
	store.getAnswerParticleIds({ row: props.row, column: props.column })
);
const answerParticleInfo = computed(() =>
	getParticleInfo(answerParticleIds.value[0]!)
);

const emptyContainerClasses: Record<
	ParticleType | 'higgs',
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
	higgs: {
		bg: 'bg-yellow-50',
		border: 'border-yellow-50',
	},
};
const occupiedContainerClasses: Record<
	ParticleType | 'higgs',
	{ bg: string; border: string }
> = {
	boson: {
		bg: 'bg-orange-100',
		border: 'border-orange-200',
	},
	lepton: {
		bg: 'bg-cyan-100',
		border: 'border-cyan-200',
	},
	quark: {
		bg: 'bg-purple-100',
		border: 'border-purple-200',
	},
	higgs: {
		bg: 'bg-yellow-100',
		border: 'border-yellow-200',
	},
};

const correctBorderClass = 'border-green-500';
const errorBorderClass = 'border-red-500';

const hardModeClasses = {
	empty: {
		border: 'bg-gray-50',
		bg: 'bg-gray-50',
	},
	occupied: {
		bg: 'bg-gray-200',
		border: 'border-gray-300',
	},
};

const particleContainerClasses = computed(() => {
	const cursorClass =
		props.currentParticleId === undefined ? '' : 'cursor-grab';
	let borderClass: string;
	let bgClass: string;

	// If the cell is empty
	if (props.currentParticleId === undefined) {
		if (store.hardMode) {
			borderClass = hardModeClasses.empty.border;
			bgClass = hardModeClasses.empty.bg;
		} else if (answerParticleIds.value.includes('higgsBoson')) {
			borderClass = emptyContainerClasses.higgs.border;
			bgClass = emptyContainerClasses.higgs.bg;
		} else {
			const { bg, border } =
				emptyContainerClasses[answerParticleInfo.value.type];
			borderClass = border;
			bgClass = bg;
		}
	}
	// If the cell is occupied
	else {
		if (store.hardMode) {
			borderClass = hardModeClasses.occupied.border;
			bgClass = hardModeClasses.occupied.bg;
		} else if (answerParticleIds.value.includes('higgsBoson')) {
			bgClass = occupiedContainerClasses.higgs.bg;
			borderClass = occupiedContainerClasses.higgs.border;
		} else {
			const { bg, border } =
				occupiedContainerClasses[answerParticleInfo.value.type];
			bgClass = bg;
			borderClass = border;
		}
	}

	// Override border class if error
	if (store.highlightErrors) {
		if (props.currentParticleId === undefined) borderClass = errorBorderClass;
		borderClass =
			props.currentParticleId !== undefined &&
			answerParticleIds.value.includes(props.currentParticleId)
				? correctBorderClass
				: errorBorderClass;
	}

	return `${cursorClass} ${borderClass} ${bgClass}`;
});

const store = useAppStore();

function onDrop(event: DragEvent) {
	const dropData = event.dataTransfer?.getData('data') ?? '';
	if (dropData === '') return;
	const data = JSON.parse(dropData) as unknown;
	if (isParticleDrop(data)) {
		const { payload } = data;
		if (payload.source.type === 'grid') {
			const { row: sourceRow, column: sourceColumn } = payload.source;
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
		} else if (payload.source.type === 'dock') {
			const { index } = payload.source;

			// Move the current particle to the dock
			if (props.currentParticleId === undefined) {
				store.particleDock.splice(index, 1);
			} else {
				store.particleDock.splice(index, 1, props.currentParticleId);
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
					source: {
						type: 'grid',
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
				<span><strong>Charge:</strong> {{ answerParticleInfo.charge }}</span>
				<span><strong>Spin:</strong> {{ answerParticleInfo.spin }}</span>
			</div>

			<ParticleBubble
				v-if="currentParticleId !== undefined"
				class="self-center"
				:particle-id="currentParticleId"
			/>

			<div class="text-center text-sm pb-1">
				<strong>Mass: </strong>
				<!-- eslint-disable-next-line vue/no-v-html -->
				<span v-html="answerParticleInfo.mass"></span>
			</div>
		</div>
	</div>
</template>
