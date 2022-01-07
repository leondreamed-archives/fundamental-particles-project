import type { AppStoreState } from './types';
import { orderedParticleAnswerGrid } from '~/utils/particle-grid';

export function createAppState(): AppStoreState {
	return {
		hardMode: false,
		createConfetti: undefined,
		isComplete: false,
		highlightErrors: false,
		// prettier-ignore
		particleAnswerGrid: orderedParticleAnswerGrid,
		particleGrid: [
			[undefined, undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
		],
	};
}
