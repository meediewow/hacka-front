import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DrawerState, useDrawer } from '@/shared/lib/drawer';

interface DrawerContentComponentProps {
    state: DrawerState;
    foo: number;
    bar: string;
}

const DrawerContentComponent: React.FC<DrawerContentComponentProps> = ({ state }) => {
    return (
        <Box width={500} p={1.5}>
            <Button variant="contained" color="primary" onClick={state.close}>
                close
            </Button>
            <br />
            <br />
            DrawerContentComponent
        </Box>
    );
};

export const DrawerTest: React.FC = () => {
    const { open } = useDrawer(DrawerContentComponent);

    const onOpen = () => {
        open({
            drawerProps: { anchor: 'right' },
            drawerContentProps: { bar: '', foo: 0 },
        });
    };

    return (
        <Button variant="contained" color="primary" onClick={onOpen}>
            open drawer
        </Button>
    );
};
