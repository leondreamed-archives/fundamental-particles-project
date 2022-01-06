<script setup lang="ts">
import { defineProps } from 'vue';
import ParticleBubble from './particle-bubble.vue';
import type { ParticleId } from '~/types/particles';
import type { ParticleDropData } from '~/utils/particle-drop';

const props = defineProps<{
	particleId: ParticleId;
}>();

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
		class="rounded-md w-30 h-30 m-2 row center border-2 bg-white border-black"
		@dragstart="onDragStart"
	>
		<ParticleBubble :particle-id="particleId" />
	</div>
</template>
