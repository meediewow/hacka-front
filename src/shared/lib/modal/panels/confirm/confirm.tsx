import React from 'react';

import { PanelBase } from '../panel-base';

import type { ConfirmProps } from './types';

export const Confirm: React.FC<React.PropsWithChildren<ConfirmProps>> = ({
    title,
    children,
    onCancel,
    onConfirm,
    agreeLabel,
    agreeColor,
    disagreeLabel,
    disagreeColor,
}) => {
    return (
        <PanelBase
            title={title}
            onDisagree={onCancel}
            onAgree={onConfirm}
            agreeLabel={agreeLabel}
            agreeColor={agreeColor}
            disagreeLabel={disagreeLabel}
            disagreeColor={disagreeColor}
        >
            {children}
        </PanelBase>
    );
};
