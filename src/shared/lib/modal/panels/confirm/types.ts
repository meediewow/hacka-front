import React from 'react';

import type { ButtonProps } from '@mui/material/Button';

export interface ConfirmProps {
    title?: React.ReactNode;
    onCancel: () => void;
    onConfirm: () => void;
    agreeLabel?: string;
    agreeColor?: ButtonProps['color'];
    disagreeLabel?: string;
    disagreeColor?: ButtonProps['color'];
}
