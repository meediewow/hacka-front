import React from 'react';
import { DrawerProvider } from '@/shared/lib/drawer/drawer-provider';

export const withDrawer = (Component: React.FC<React.PropsWithChildren>) => {
    const WithDrawer: React.FC<React.PropsWithChildren> = (props) => {
        return (
            <DrawerProvider>
                <Component {...props} />
            </DrawerProvider>
        );
    };
    return WithDrawer;
};
