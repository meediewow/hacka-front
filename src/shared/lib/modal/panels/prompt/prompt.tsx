import React from 'react';

import { PanelBase } from '../panel-base';

import type { PromptProps } from './types';

export const Prompt: React.FC<React.PropsWithChildren<PromptProps>> = ({
    title,
    children,
    onCancel,
    onApply,
}) => {
    return (
        <PanelBase
            title={title}
            onDisagree={onCancel}
            onAgree={onApply}
            agreeLabel={'Сохранить'}
        >
            {children}
        </PanelBase>
    );
};
