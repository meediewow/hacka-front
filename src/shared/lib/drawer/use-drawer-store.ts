import React from 'react';

import omit from 'lodash/omit';

import { create } from '@/shared/lib/store';

interface State {
    drawers: Record<string, React.FC>;
    addDrawer: (drawerId: string, DrawerComponent: React.FC) => void;
    removeDrawer: (drawerId: string) => void;
}

export const useDrawerStore = create<State>((set) => ({
    drawers: {},
    addDrawer: (drawerId, DrawerComponent) => {
        set((state) => ({
            ...state,
            drawers: { ...state.drawers, [drawerId]: DrawerComponent },
        }));
    },
    removeDrawer: (drawerId) => {
        set((state) => ({ ...state, drawers: omit(state.drawers, drawerId) }));
    },
}));

export const selectActions = ({ addDrawer, removeDrawer }: State) => ({
    addDrawer,
    removeDrawer,
});
