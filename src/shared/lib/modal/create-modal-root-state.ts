import type { Store } from '@/shared/lib/store/types';
import type { ModalContentProps, ModalRootState } from './types';

export function createModalRootState<
    TResult = void,
    TModalContentProps extends ModalContentProps<TResult> = ModalContentProps<TResult>,
>(
    set: Store<ModalRootState<TResult, TModalContentProps>>['setState']
): ModalRootState<TResult, TModalContentProps> {
    return {
        open: false,
        modalProps: {},
        modalContentProps: {
            state: {
                close: () => {
                    set((state) => ({ ...state, open: false }));
                },
            },
        } as unknown as TModalContentProps,
        openModalAsync: (modalProps, modalContentProps) => {
            return new Promise<TResult | undefined>((resolve) => {
                set((state) => ({
                    ...state,
                    open: true,
                    modalProps: { ...state.modalProps, ...modalProps },
                    modalContentProps: {
                        ...state.modalContentProps,
                        state: {
                            close: (result) => {
                                state.modalContentProps.state.close(result);
                                resolve(result);
                            },
                        },
                        ...modalContentProps,
                    },
                }));
            });
        },
    };
}
