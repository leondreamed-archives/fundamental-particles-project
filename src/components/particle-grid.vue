<script setup lang="ts">
import { computed } from 'vue';
import ParticleGridCell from './particle-grid-cell.vue';
import { useAppStore } from '~/store/app';

const store = useAppStore();

const particleGrid = computed(() => store.particleGrid);
</script>

<template>
	<div class="overflow-y-auto overflow-x-auto column w-full">
		<div class="grid grid-rows-4 grid-cols-[repeat(5,max-content)] p-2 mx-auto">
			<template v-for="(particleRow, rowIndex) of particleGrid" :key="rowIndex">
				<div
					v-for="(particleName, columnIndex) of particleRow"
					:key="particleName"
					class="row"
					:style="{ 'grid-row-start': rowIndex + 1 }"
				>
					<ParticleGridCell
						:current-particle-id="particleName"
						:column="columnIndex"
						:row="rowIndex"
					/>
				</div>
			</template>
		</div>
	</div>
</template>
