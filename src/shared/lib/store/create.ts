import { useStore } from './react';
import { createStore } from './vanilla';
import type { Store, StateCreator } from './types';

export const create = <TState>(createState: StateCreator<TState>) => {
    const store = createStore<TState>(createState);

    return <TSlice = TState>(
        selector?: (state: TState) => TSlice,
        isEqual?: (a: TSlice, b: TSlice) => boolean
    ) => useStore(store, selector, isEqual);
};

export type { Store };
