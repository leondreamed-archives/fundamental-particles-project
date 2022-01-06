<script setup lang="ts">
import { computed, defineProps } from 'vue';
import type { ParticleName, ParticleType } from '~/types/particles';
import { particlesInformation, particlesToHtml } from '~/utils/particles';

const props = defineProps<{
	particleName: ParticleName;
}>();

const particleTypeToClasses: Record<ParticleType, string> = {
	boson: 'border-2 border-red-300 bg-red-100',
	lepton: 'border-2 border-green-300 bg-green-100',
	quark: 'border-2 border-purple-300 bg-purple-100',
};

const particleTypeToBubbleClass: Record<ParticleType, string> = {
	boson: 'bg-red-300',
	lepton: 'bg-green-300',
	quark: 'bg-purple-300',
};

const particleInfo = computed(() => particlesInformation[props.particleName]);
const particleHtml = computed(() => particlesToHtml[props.particleName]);
</script>

<template>
	<div
		class="rounded-md w-30 h-30 m-2 text-[50px] row center"
		:class="particleTypeToClasses[particleInfo.type]"
	>
		<div
			class="bg-blue-200 rounded-full w-18 h-18 row center"
			:class="particleTypeToBubbleClass[particleInfo.type]"
		>
			<!-- eslint-disable-next-line vue/no-v-html -->
			<div class="particle-letter" v-html="particleHtml"></div>
		</div>
	</div>
</template>

<style scoped>
.particle-letter {
	font-family: 'Times New Roman', Times, serif;
}

.particle-letter :deep(sub) {
	font-size: 1.5rem;
}
</style>
