export type Listener<TState> = (state: TState) => void;

export interface Store<TState> {
    setState: (updater: TState | ((state: TState) => TState)) => void;
    getState: () => TState;
    subscribe: (listener: Listener<TState>) => () => void;
}

export type StateCreator<TState> = (
    set: Store<TState>['setState'],
    get: Store<TState>['getState']
) => TState;
