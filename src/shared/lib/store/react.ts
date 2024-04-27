import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/with-selector';

import type { Store } from './types';

export const useStore = <TState, TSlice = TState>(
    store: Store<TState>,
    selector: (state: TState) => TSlice = store.getState as unknown as (
        state: TState
    ) => TSlice,
    isEqual?: (a: TSlice, b: TSlice) => boolean
) => {
    const slice = useSyncExternalStoreWithSelector<TState, TSlice>(
        store.subscribe,
        store.getState,
        store.getState,
        selector,
        isEqual
    );

    return slice;
};

export type { Store };
