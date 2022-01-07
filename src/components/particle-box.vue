<script setup lang="ts">
import { computed } from 'vue';
import ParticleBubble from './particle-bubble.vue';
import type { ParticleDropData, ParticleId } from '~/types/particles';
import { getParticleInfo } from '~/utils/particles';
import { useAppStore } from '~/store/app';

const props = defineProps<{
	particleId: ParticleId;
}>();

const particleInfo = computed(() => getParticleInfo(props.particleId));

const store = useAppStore();

function onDragStart(event: DragEvent) {
	event.dataTransfer?.setData(
		'data',
		JSON.stringify<ParticleDropData>({
			type: 'particle-drop',
			payload: {
				source: {
					type: 'dock',
					index: store.particleDock.indexOf(props.particleId),
				},
				particleId: props.particleId,
			},
		})
	);
}
</script>

<template>
	<div
		draggable="true"
		class="rounded-md w-28 h-28 m-2 center border-2 bg-white border-black column text-center text-xs cursor-grab"
		@dragstart="onDragStart"
	>
		<ParticleBubble :particle-id="particleId" />
		<span class="mt-1">{{ particleInfo.name }}</span>
	</div>
</template>
