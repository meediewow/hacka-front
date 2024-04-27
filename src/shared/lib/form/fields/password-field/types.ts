import type { TextFieldProps } from '@mui/material/TextField';
import type { BaseFieldProps, FieldValues } from '../../types';

export interface PasswordFieldProps<T extends FieldValues>
    extends BaseFieldProps<T>,
        Pick<
            TextFieldProps<'standard'>,
            | 'placeholder'
            | 'autoFocus'
            | 'required'
            | 'inputProps'
            | 'InputProps'
            | 'InputLabelProps'
        > {}
