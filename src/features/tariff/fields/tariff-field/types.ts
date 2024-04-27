import { BaseFieldProps } from '@/shared/lib/form/types';
import { FieldValues } from 'react-hook-form';

export interface TariffsFieldProps<T extends FieldValues> extends BaseFieldProps<T> {}
