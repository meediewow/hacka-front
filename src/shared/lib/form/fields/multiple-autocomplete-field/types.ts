import type { Option } from '@/shared/types/option';
import type { BaseFieldProps, FieldValues } from '../../types';

export interface MultipleAutocompleteFieldProps<T extends FieldValues>
    extends BaseFieldProps<T> {
    options: Option[];
}
