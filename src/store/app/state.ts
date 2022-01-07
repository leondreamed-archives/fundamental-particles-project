import type { AppStoreState } from './types';
import { orderedParticleAnswerGrid } from '~/utils/particle-grid';
import { fundamentalParticleIds } from '~/utils/particles';

export function createAppState(): AppStoreState {
	return {
		hardMode: false,
		createConfetti: undefined,
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
