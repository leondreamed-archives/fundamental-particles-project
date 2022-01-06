<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
	particleName: string | undefined;
}>();
</script>

<template>
	<div class="bg-gray-100 rounded-md w-30 h-30 m-2 border-gray-200 border-2">
		{{ String(particleName) }}
	</div>
</template>
