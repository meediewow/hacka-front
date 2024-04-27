import React from 'react';

import Drawer from '@mui/material/Drawer';

import { useStore } from '@/shared/lib/store/react';

import type { DrawerContentProps, DrawerRootProps } from './types';

export function DrawerRoot<
    TDrawerContentProps extends DrawerContentProps = DrawerContentProps,
>({ store, children }: DrawerRootProps<TDrawerContentProps>) {
    const { open, drawerProps, drawerContentProps } = useStore(store);

    const renderContent = React.useMemo(
        () => children(drawerContentProps),
        [children, drawerContentProps]
    );

    const onClose = () => {
        drawerProps.onClose?.();
        drawerContentProps.state.close();
    };

    return (
        <Drawer anchor="right" {...drawerProps} open={open} onClose={onClose}>
            {renderContent}
        </Drawer>
    );
}
