import React from 'react';

import omit from 'lodash/omit';

import { create } from '@/shared/lib/store';

interface State {
    modals: Record<string, React.FC>;
    addModal: (modalId: string, ModalComponent: React.FC) => void;
    removeModal: (modalId: string) => void;
}

export const useModalStore = create<State>((set) => ({
    modals: {},
    addModal: (modalId, ModalComponent) => {
        set((state) => ({
            ...state,
            modals: { ...state.modals, [modalId]: ModalComponent },
        }));
    },
    removeModal: (modalId) => {
        set((state) => ({ ...state, modals: omit(state.modals, modalId) }));
    },
}));

export const selectActions = ({ addModal, removeModal }: State) => ({
    addModal,
    removeModal,
});
