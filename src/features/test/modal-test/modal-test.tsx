import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useModal } from '@/shared/lib/modal';
import { PanelBase } from '@/shared/lib/modal/panels/panel-base';
import type { ModalState } from '@/shared/lib/modal/types.ts';

interface ModalComponentProps {
    state: ModalState;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ state }) => {
    const onDisagree = () => {
        state.close();
    };

    const onAgree = () => {
        state.close();
    };

    const onClose = () => {
        state.close();
    };

    return (
        <PanelBase
            title="title: base modal component"
            onAgree={onAgree}
            onDisagree={onDisagree}
            onClose={onClose}
            otherActions={<Box mr="auto">other actions</Box>}
        >
            content: base modal content
        </PanelBase>
    );
};

export const ModalTest: React.FC = () => {
    const { open } = useModal(ModalComponent);

    const onOpen = () => {
        void open({
            modalProps: { fullWidth: true, maxWidth: 'sm' },
        });
    };

    return (
        <Button variant="contained" onClick={onOpen}>
            open modal
        </Button>
    );
};
