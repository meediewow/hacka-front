import type { BaseFieldProps } from '@/shared/lib/form/types';
import type { FieldValues } from 'react-hook-form';
import type { SxProps, Theme } from '@mui/material/styles';

export interface TariffsFieldProps<T extends FieldValues> extends BaseFieldProps<T> {
    sx?: SxProps<Theme>;
}
