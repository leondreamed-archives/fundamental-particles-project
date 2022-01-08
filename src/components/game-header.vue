<script setup lang="ts">
import { mdiArrowLeft } from '@mdi/js';
import prettyMs from 'pretty-ms';
import { useAppStore } from '~/store/app';

const store = useAppStore();
</script>

<template>
	<div class="bg-blue-400 w-full p-2 items-center row text-white font-bold">
		<router-link
			to="/"
			class="row cursor-pointer hover:text-gray-100 flex-1 mr-auto"
		>
			<v-icon class="mr-2" :path="mdiArrowLeft"></v-icon>
			Back to Menu
		</router-link>
		<div class="flex-1 text-center text-xl">
			{{ prettyMs(store.secondsElapsed * 1000, { colonNotation: true }) }}
		</div>
		<div class="flex-1 ml-auto"></div>
	</div>
</template>
