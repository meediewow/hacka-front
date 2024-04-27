import React from 'react';

import map from 'lodash/map';

import { useModalStore } from './use-modal-store';

export const ModalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { modals } = useModalStore();

    return (
        <>
            {children}

            {map(modals, (ModalComponent, modalId) => (
                <ModalComponent key={modalId} />
            ))}
        </>
    );
};
