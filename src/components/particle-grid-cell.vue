<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { useAppStore } from '~/store/app';
import type { ParticleName } from '~/types/particles';
import { isParticleDrop } from '~/utils/particle-drop';
import { particlesInformation } from '~/utils/particles';

const props = defineProps<{
	particleName: ParticleName | undefined;
	column: number;
	row: number;
}>();
const particleInfo = computed(() =>
	props.particleName === undefined
		? undefined
		: particlesInformation[props.particleName]
);
const store = useAppStore();

function onDrop(event: DragEvent) {
	const dropData = event.dataTransfer?.getData('data') ?? '';
	if (dropData !== '') {
		const data = JSON.parse(dropData) as unknown;
		if (isParticleDrop(data)) {
			store.setParticleGridCell({
				particleName: data.payload.particleName,
				column: props.column,
				row: props.row,
			});
		}
	}
}
</script>

<template>
	<div
		class="bg-gray-100 rounded-md m-2 border-gray-200 h-40 w-40 border-2"
		@drop.prevent="onDrop"
		@dragover.prevent
	>
		<div v-if="particleInfo !== undefined">
			<strong>Charge:</strong> {{ particleInfo.charge }}

			<strong>Mass:</strong> {{ particleInfo.mass }}

			<strong>Spin:</strong> {{ particleInfo.spin }}
		</div>
	</div>
</template>
