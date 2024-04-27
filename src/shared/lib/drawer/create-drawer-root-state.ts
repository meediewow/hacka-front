import type { Store } from '@/shared/lib/store/types';
import type { DrawerContentProps, DrawerRootState } from './types';

export function createDrawerRootState<
    TDrawerContentProps extends DrawerContentProps = DrawerContentProps,
>(
    set: Store<DrawerRootState<TDrawerContentProps>>['setState']
): DrawerRootState<TDrawerContentProps> {
    return {
        open: false,
        drawerProps: {},
        drawerContentProps: {
            state: {
                close: () => {
                    set((state) => ({ ...state, open: false }));
                },
            },
        } as TDrawerContentProps,
        openDrawer: (drawerProps, drawerContentProps) => {
            set((state) => ({
                ...state,
                open: true,
                drawerProps: { ...state.drawerProps, ...drawerProps },
                drawerContentProps: {
                    ...state.drawerContentProps,
                    ...drawerContentProps,
                },
            }));
        },
    };
}
