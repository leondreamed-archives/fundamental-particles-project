<script setup lang="ts">
import { computed } from 'vue';
import ParticleBubble from './particle-bubble.vue';
import type { ParticleId } from '~/types/particles';
import type { ParticleDropData } from '~/utils/particle-drop';
import { getParticleInfo } from '~/utils/particles';

const props = defineProps<{
	particleId: ParticleId;
}>();

const particleInfo = computed(() => getParticleInfo(props.particleId));

function onDragStart(event: DragEvent) {
	event.dataTransfer?.setData(
		'data',
		JSON.stringify<ParticleDropData>({
			type: 'particle-drop',
			payload: {
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
