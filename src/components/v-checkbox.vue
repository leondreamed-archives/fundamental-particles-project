<template>
	<div class="form-check">
		<input
			:id="checkboxId"
			class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-0.5 mr-2 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
			:class="inputClass"
			type="checkbox"
			:value="modelValue"
			@change="$emit('update:modelValue', !modelValue)"
		/>
		<label
			class="form-check-label inline-block text-gray-800 cursor-pointer"
			:for="checkboxId"
		>
			<slot></slot>
		</label>
	</div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid';

defineProps<{
	inputClass: string | undefined;
	modelValue: boolean;
}>();

defineEmits(['update:modelValue']);

const checkboxId = nanoid();
</script>
