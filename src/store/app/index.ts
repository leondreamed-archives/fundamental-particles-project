import { defineStore } from 'pinia';
import type { AppStoreState } from './types';
import * as appActions from './actions';

export const useAppStore = defineStore({
	id: 'app',
	state: (): AppStoreState => ({
		// prettier-ignore
		particleGrid: [
			[undefined, undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
		],
	}),
	actions: { ...appActions },
	getters: {},
});
