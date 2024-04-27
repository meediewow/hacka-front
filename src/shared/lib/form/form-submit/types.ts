import React from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import type { FieldValues, FormState } from '../types';

export interface FormSubmitProps<T extends FieldValues> {
    sx?: SxProps<Theme>;
    label: string;
    execute?: () => void;
    renderButton?: (
        state: Pick<FormState<T>, 'isSubmitting' | 'isValid'>
    ) => React.JSX.Element;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}
