import type { AppGetterThis } from './types';

export function isGridEmpty(this: AppGetterThis) {
	return this.particleGrid.flat().every((cell) => cell === undefined);
}
