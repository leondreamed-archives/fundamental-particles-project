<template>
	<div class="column center h-full p-8">
		<div class="text-[8rem] text-center font-bold leading-none">
			Fundamental Particles Game
		</div>
		<VCheckbox v-model="store.hardMode" class="mt-5 mb-3" input-class="h-8 w-8">
			<span class="text-3xl font-bold">Hard Mode</span>
		</VCheckbox>
		<div class="text-lg text-center my-5">
			<span class="font-bold">Instructions: </span>
			<span>
				Drag the fundamental particles to the grid cell with the correct
				information!
			</span>
		</div>
		<div
			role="button"
			class="bg-green-500 text-white font-bold rounded-md px-5 py-2 text-4xl hover:bg-green-600 cursor-pointer"
			@click="startGame"
		>
			Start Game
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { watch } from 'vue';
import { useAppStore } from '~/store/app';
import VCheckbox from '~/components/v-checkbox.vue';

const store = useAppStore();
watch(
	() => store.hardMode,
	() => {
		console.log(store.hardMode);
	}
);

const router = useRouter();
async function startGame() {
	store.resetGame();
	await router.push(`/game${store.hardMode ? '?mode=hard' : ''}`);
}
</script>
