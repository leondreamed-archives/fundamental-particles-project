<template>
	<div class="column center h-full p-8">
		<div class="text-[8rem] text-center font-bold leading-none">
			Fundamental Particles Game
		</div>
		<div class="text-xl"><strong>By:</strong> Leon Si</div>
		<div class="text-lg text-center my-5">
			<span class="font-bold">Instructions: </span>
			<span>
				Drag the fundamental particles to the grid cell with the correct
				information!
			</span>
		</div>
		<VCheckbox v-model="store.hardMode" class="mb-5" input-class="h-8 w-8">
			<span class="text-3xl font-bold">Hard Mode</span>
		</VCheckbox>
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
import { useAppStore } from '~/store/app';
import VCheckbox from '~/components/v-checkbox.vue';
import { createAppState } from '~/store/app/state';

const store = useAppStore();
store.clearGame();
store.$state = createAppState();

const router = useRouter();
async function startGame() {
	store.startGame();
	await router.push(`/game${store.hardMode ? '?mode=hard' : ''}`);
}
</script>
