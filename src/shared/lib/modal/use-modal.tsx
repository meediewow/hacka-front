import React from 'react';

import { v4 as uuid } from 'uuid';

import { shallow } from '@/shared/lib/store/shallow';
import { createStore } from '@/shared/lib/store/vanilla';

import { ModalRoot } from './modal-root';
import { useModalStore, selectActions } from './use-modal-store';
import { createModalRootState } from './create-modal-root-state';

import type { ModalProps, ModalState, ModalRootState, ModalContentProps } from './types';

export function useModal<
    TResult = void,
    TModalContentProps extends ModalContentProps<TResult> = ModalContentProps<TResult>,
>(ModalContentComponent: React.FC<TModalContentProps & { state: ModalState<TResult> }>) {
    const modalRootStore = React.useRef(
        createStore<ModalRootState<TResult, TModalContentProps>>(createModalRootState)
    );

    const { addModal, removeModal } = useModalStore(selectActions, shallow);

    React.useEffect(() => {
        const modalId = uuid();

        const ModalComponent: React.FC = () => (
            <ModalRoot store={modalRootStore.current}>
                {(modalContentProps) => <ModalContentComponent {...modalContentProps} />}
            </ModalRoot>
        );

        addModal(modalId, React.memo(ModalComponent));

        return () => {
            removeModal(modalId);
        };
    }, [ModalContentComponent, addModal, removeModal]);

    const open = React.useCallback(
        (config?: {
            modalProps?: ModalProps<TResult>;
            modalContentProps?: Omit<TModalContentProps, 'state'>;
        }) => {
            const { openModalAsync } = modalRootStore.current.getState();

            return openModalAsync(config?.modalProps, config?.modalContentProps);
        },
        []
    );

    return { open };
}
