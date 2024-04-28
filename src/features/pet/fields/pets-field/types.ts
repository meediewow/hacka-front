import { BaseFieldProps } from '@/shared/lib/form/types';
import { SxProps, Theme } from '@mui/material/styles';
import { FieldValues } from 'react-hook-form';

export interface PetsFieldProps<T extends FieldValues> extends BaseFieldProps<T> {
    sx?: SxProps<Theme>;
}
