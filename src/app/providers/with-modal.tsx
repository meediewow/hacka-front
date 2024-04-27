import React from 'react';
import { ModalProvider } from '@/shared/lib/modal/modal-provider';

export const withModal = (Component: React.FC<React.PropsWithChildren>) => {
    const WithModal: React.FC<React.PropsWithChildren> = (props) => {
        return (
            <ModalProvider>
                <Component {...props} />
            </ModalProvider>
        );
    };
    return WithModal;
};
