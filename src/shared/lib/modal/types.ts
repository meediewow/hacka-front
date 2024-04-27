import React from 'react';

import type { DialogProps } from '@mui/material/Dialog';

import type { Store } from '@/shared/lib/store/types';

export type ModalProps<TResult = void> = Omit<
    DialogProps,
    'open' | 'onClose' | 'onBackdropClick'
> & {
    onBackdropClick?: (close: (result?: TResult) => void) => void;
    disableBackdropClick?: boolean;
};

export type ModalState<TResult = void> = {
    close: (result?: TResult) => void;
};

export type ModalContentProps<TResult = void> = {
    state: ModalState<TResult>;
};

export interface ModalRootState<
    TResult = void,
    TModalContentProps extends ModalContentProps<TResult> = ModalContentProps<TResult>,
> {
    open: boolean;
    modalProps: ModalProps<TResult>;
    modalContentProps: TModalContentProps;
    openModalAsync: (
        modalProps?: ModalProps<TResult>,
        modalContentProps?: Omit<TModalContentProps, 'state'>
    ) => Promise<TResult | undefined>;
}

export interface ModalRootProps<
    TResult = void,
    TModalContentProps extends ModalContentProps<TResult> = ModalContentProps<TResult>,
> {
    store: Store<ModalRootState<TResult, TModalContentProps>>;
    children: (modalContentProps: TModalContentProps) => React.ReactNode;
}
