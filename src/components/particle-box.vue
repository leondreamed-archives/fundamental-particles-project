<script setup lang="ts">
import { computed, defineProps } from 'vue';
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
		class="rounded-md w-30 h-30 m-2 center border-2 bg-white border-black column text-center text-xs"
		@dragstart="onDragStart"
	>
		<ParticleBubble :particle-id="particleId" />
		<span class="mt-2">{{ particleInfo.name }}</span>
	</div>
</template>
