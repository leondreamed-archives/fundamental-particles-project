<template>
	<div class="column center h-full p-8">
		<div class="text-[8rem] text-center font-bold leading-none">
			Fundamental Particles Game
		</div>
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
import { useAppStore } from '~/store/app';

const router = useRouter();
const store = useAppStore();
async function startGame() {
	store.resetGame();
	await router.push('/game');
}
</script>
