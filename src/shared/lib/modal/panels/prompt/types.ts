import React from 'react';

export interface PromptProps {
    title: React.ReactNode;
    onApply: () => void;
    onCancel: () => void;
}
