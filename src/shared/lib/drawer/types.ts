import React from 'react';

import type { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';

import type { Store } from '@/shared/lib/store/types';

export interface DrawerState {
    close: () => void;
}

export type DrawerContentProps = { state: DrawerState };

export interface DrawerProps extends Omit<MuiDrawerProps, 'open' | 'onClose'> {
    onClose?: () => void;
}

export interface DrawerRootState<
    TDrawerContentProps extends DrawerContentProps = DrawerContentProps,
> {
    open: boolean;
    drawerProps: DrawerProps;
    drawerContentProps: TDrawerContentProps;
    openDrawer: (
        drawerProps?: DrawerProps,
        drawerContentProps?: Omit<TDrawerContentProps, 'state'>
    ) => void;
}

export interface DrawerRootProps<
    TDrawerContentProps extends DrawerContentProps = DrawerContentProps,
> {
    store: Store<DrawerRootState<TDrawerContentProps>>;
    children: (drawerContentProps: TDrawerContentProps) => React.ReactNode;
}
