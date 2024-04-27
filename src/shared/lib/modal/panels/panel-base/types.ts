import React from 'react';

import type { ButtonProps } from '@mui/material/Button';

export interface PanelBaseProps {
    title: React.ReactNode;
    onClose?: () => void;
    onAgree?: () => void;
    onDisagree?: () => void;
    agreeLabel?: string;
    agreeLoading?: boolean;
    agreeDisabled?: boolean;
    agreeAutoFocus?: boolean;
    agreeColor?: ButtonProps['color'];
    disagreeLabel?: string;
    disagreeDisabled?: boolean;
    disagreeColor?: ButtonProps['color'];
    otherActions?: React.ReactNode;
}
