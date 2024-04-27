import React from 'react';

export interface AlertProps {
    title: React.ReactNode;
    onAgree: () => void;
    agreeLabel?: string;
}
