import React from 'react';

import { v4 as uuid } from 'uuid';

import { shallow } from '@/shared/lib/store/shallow';
import { createStore } from '@/shared/lib/store/vanilla';

import { DrawerRoot } from './drawer-root';
import { useDrawerStore, selectActions } from './use-drawer-store';
import { createDrawerRootState } from './create-drawer-root-state';

import type { DrawerContentProps, DrawerProps, DrawerRootState } from './types';

export function useDrawer<
    TDrawerContentProps extends DrawerContentProps = DrawerContentProps,
>(DrawerContentComponent: React.FC<TDrawerContentProps>) {
    const drawerRootStore = React.useRef(
        createStore<DrawerRootState<TDrawerContentProps>>(createDrawerRootState)
    );

    const { addDrawer, removeDrawer } = useDrawerStore(selectActions, shallow);

    React.useEffect(() => {
        const drawerId = uuid();

        const DrawerComponent: React.FC = () => (
            <DrawerRoot<TDrawerContentProps> store={drawerRootStore.current}>
                {(drawerContentProps) => (
                    <DrawerContentComponent {...drawerContentProps} />
                )}
            </DrawerRoot>
        );

        addDrawer(drawerId, React.memo(DrawerComponent));

        return () => {
            removeDrawer(drawerId);
        };
    }, [DrawerContentComponent, addDrawer, removeDrawer]);

    const open = React.useCallback(
        (config?: {
            drawerProps?: DrawerProps;
            drawerContentProps?: Omit<TDrawerContentProps, 'state'>;
        }) => {
            const { openDrawer } = drawerRootStore.current.getState();

            openDrawer(config?.drawerProps, config?.drawerContentProps);
        },
        []
    );

    return { open };
}
