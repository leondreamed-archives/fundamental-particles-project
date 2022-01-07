import { defineStore } from 'pinia';
import * as appActions from './actions';
import * as appGetters from './getters';
import { createAppState } from './state';

export const useAppStore = defineStore({
	id: 'app',
	state: createAppState,
	actions: { ...appActions },
	getters: { ...appGetters },
});
