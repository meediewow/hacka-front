import React from 'react';

import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import type { AlertProps } from './types';

export const Alert: React.FC<React.PropsWithChildren<AlertProps>> = ({
    title,
    children,
    onAgree,
    agreeLabel,
}) => {
    return (
        <>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    autoFocus
                    onClick={onAgree}
                >
                    {agreeLabel ?? 'OK'}
                </Button>
            </DialogActions>
        </>
    );
};
