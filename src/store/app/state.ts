import type { AppStoreState } from './types';
import { orderedParticleAnswerGrid } from '~/utils/particle-grid';
import { fundamentalParticleIds } from '~/utils/particles';

export function createAppState(): AppStoreState {
	return {
		hardMode: false,
		secondsElapsed: 0,
		timer: undefined,
		isComplete: false,
		highlightErrors: false,
		particleAnswerGrid: orderedParticleAnswerGrid,
		// prettier-ignore
		particleGrid: [
			[undefined, undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
		],
		particleDock: [...fundamentalParticleIds],
	};
}
