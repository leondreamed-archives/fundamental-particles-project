import type { AppGetterThis } from './types';

export function isGridEmpty(this: AppGetterThis) {
	return this.particleGrid.flat().every((cell) => cell === undefined);
}

export function orderedDockParticleIds(this: AppGetterThis) {
	return [...this.particleDock].sort();
}
