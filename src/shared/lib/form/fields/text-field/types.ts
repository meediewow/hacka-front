import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import type { BaseFieldProps, FieldValues } from '../../types';

export interface TextFieldProps<T extends FieldValues>
    extends BaseFieldProps<T>,
        Pick<
            MuiTextFieldProps<'standard'>,
            | 'multiline'
            | 'placeholder'
            | 'autoFocus'
            | 'required'
            | 'type'
            | 'inputProps'
            | 'InputProps'
            | 'InputLabelProps'
            | 'minRows'
            | 'maxRows'
        > {
    min?: string;
    max?: string;
    maxlength?: number;
    slots?: {
        maxlength?: React.ElementType;
    };
}
