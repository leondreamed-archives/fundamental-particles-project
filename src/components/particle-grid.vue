<script setup lang="ts">
import { computed } from 'vue';
import ParticleGridCell from './particle-grid-cell.vue';
import { useAppStore } from '~/store/app';

const store = useAppStore();

const particleGrid = computed(() => store.particleGrid);
</script>

<template>
	<div class="grid grid-rows-4 grid-cols-5 overflow-hidden">
		<template v-for="(particleRow, rowIndex) of particleGrid" :key="rowIndex">
			<div
				v-for="(particleName, columnIndex) of particleRow"
				:key="particleName"
				class="row"
				:style="{ 'grid-row-start': rowIndex + 1 }"
			>
				<ParticleGridCell
					:particle-name="particleName"
					:column="columnIndex"
					:row="rowIndex"
				/>
			</div>
		</template>
	</div>
</template>
