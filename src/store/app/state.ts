import type { AppStoreState } from './types';

export function createAppState(): AppStoreState {
	return {
		createConfetti: undefined,
		isComplete: false,
		highlightErrors: false,
		// prettier-ignore
		particleGrid: [
			[undefined, undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
		],
	};
}
