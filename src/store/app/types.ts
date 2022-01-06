import * as appActions from './actions';
import { ParticleName } from '~/types/particles';
import { ActionThis, GetterThis, RawStore } from '~/types/store';

type P = ParticleName | undefined;
export type AppStoreState = {
	// prettier-ignore
	particleGrid: [
		[P, P, P, P, P],
		[P, P, P, P],
		[P, P, P, P],
		[P, P, P, P]
	]
};

type AppActions = typeof appActions;
type AppGetters = Record<string, never>;

export type AppActionThis = ActionThis<
	'app',
	AppStoreState,
	AppGetters,
	AppActions
>;

export type AppGetterThis = GetterThis<AppStoreState, AppGetters>;
export type AppStore = RawStore<'app', AppStoreState, AppGetters, AppActions>;
