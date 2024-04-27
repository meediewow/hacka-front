import React from 'react';

import map from 'lodash/map';

import { useDrawerStore } from './use-drawer-store';

export const DrawerProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { drawers } = useDrawerStore();

    return (
        <>
            {children}

            {map(drawers, (DrawerComponent, modalId) => (
                <DrawerComponent key={modalId} />
            ))}
        </>
    );
};
