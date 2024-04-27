import type { Option } from '@/shared/types/option';
import type { BaseFieldProps, FieldValues } from '../../types';

export interface AutocompleteFieldProps<T extends FieldValues> extends BaseFieldProps<T> {
    options: Option[];
}
