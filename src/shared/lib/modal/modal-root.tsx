import React from 'react';

import Dialog from '@mui/material/Dialog';

import { useStore } from '@/shared/lib/store/react';

import type { ModalContentProps, ModalRootProps } from './types';

export function ModalRoot<
    TResult = void,
    TModalContentProps extends ModalContentProps<TResult> = ModalContentProps<TResult>,
>({ store, children }: ModalRootProps<TResult, TModalContentProps>) {
    const {
        open,
        modalProps: { disableBackdropClick, onBackdropClick, ...modalProps },
        modalContentProps,
    } = useStore(store);

    const onClose = () => {
        if (disableBackdropClick) {
            return;
        }
        if (onBackdropClick) {
            onBackdropClick(modalContentProps.state.close);
        } else {
            modalContentProps.state.close();
        }
    };

    const renderContent = React.useMemo(
        () => children(modalContentProps),
        [children, modalContentProps]
    );

    return (
        <Dialog {...modalProps} open={open} onClose={onClose}>
            {renderContent}
        </Dialog>
    );
}
