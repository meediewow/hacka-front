import React from 'react';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import CloseIcon from '@mui/icons-material/Close';

import { CloseIconButtonSC } from './styles';

import type { PanelBaseProps } from './types';

export const PanelBase: React.FC<React.PropsWithChildren<PanelBaseProps>> = ({
    title,
    children,
    onAgree,
    onDisagree,
    onClose,
    agreeLabel,
    agreeLoading,
    agreeDisabled,
    agreeAutoFocus,
    agreeColor = 'primary',
    disagreeLabel,
    disagreeDisabled,
    disagreeColor = 'secondary',
    otherActions,
}) => {
    return (
        <>
            {title && <DialogTitle>{title}</DialogTitle>}

            {children && <DialogContent>{children}</DialogContent>}

            <DialogActions>
                {otherActions}
                {onDisagree && (
                    <Button
                        variant="contained"
                        color={disagreeColor}
                        disabled={disagreeDisabled}
                        onClick={onDisagree}
                    >
                        {disagreeLabel ?? 'Отменить'}
                    </Button>
                )}
                {onAgree && (
                    <LoadingButton
                        type="submit"
                        variant="contained"
                        color={agreeColor}
                        autoFocus={agreeAutoFocus}
                        onClick={onAgree}
                        loading={agreeLoading}
                        disabled={agreeDisabled}
                    >
                        {agreeLabel ?? 'Подтвердить'}
                    </LoadingButton>
                )}
            </DialogActions>

            {onClose && (
                <CloseIconButtonSC>
                    <IconButton onClick={onClose}>
                        <CloseIcon fontSize="medium" />
                    </IconButton>
                </CloseIconButtonSC>
            )}
        </>
    );
};
