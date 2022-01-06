import type {
	GettersTree,
	PiniaCustomProperties,
	PiniaCustomStateProperties,
	StateTree,
	StoreWithGetters,
	StoreWithState,
} from 'pinia';

export type ActionThis<
	Id extends string,
	S extends StateTree,
	G extends GettersTree<StateTree>,
	A
> = A &
	S &
	StoreWithState<Id, S, G, A> &
	StoreWithGetters<G> &
	PiniaCustomProperties &
	PiniaCustomStateProperties;

export type GetterThis<
	S extends StateTree,
	G extends GettersTree<StateTree>
> = S &
	StoreWithGetters<G> &
	PiniaCustomProperties &
	PiniaCustomStateProperties;

export type RawStore<
	Id extends string,
	S extends StateTree,
	G extends GettersTree<StateTree>,
	A
> = S &
	StoreWithState<Id, S, G, A> &
	StoreWithGetters<G> &
	A &
	PiniaCustomProperties<Id, S, G, A> &
	PiniaCustomStateProperties<S>;
