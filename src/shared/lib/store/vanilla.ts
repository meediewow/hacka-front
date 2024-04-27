import type { Store, StateCreator, Listener } from './types';

export const createStore = <TState>(createState: StateCreator<TState>): Store<TState> => {
    let state: TState;

    const listeners = new Set<Listener<TState>>();

    const setState = (updater: TState | ((state: TState) => TState)) => {
        const nextState = updater instanceof Function ? updater(state) : updater;

        if (!Object.is(nextState, state)) {
            state = nextState;
            listeners.forEach((listener) => listener(state));
        }
    };

    const getState = () => {
        return state;
    };

    const subscribe = (listener: Listener<TState>) => {
        listeners.add(listener);

        return () => {
            listeners.delete(listener);
        };
    };

    state = createState(setState, getState);

    return { setState, getState, subscribe };
};

export type { Store };
