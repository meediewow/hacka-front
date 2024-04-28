import type { DateRange } from '@/shared/types/date';
import type { OptionBase } from '@/shared/types/option-base';
import type { AutocompleteGeoOption } from '@/shared/geo';

export interface SitterFilterFormData {
    categories: OptionBase<number>[];
    date?: DateRange;
    address?: AutocompleteGeoOption | null;
}

export interface SitterFilterFormProps {
    onSubmit: (data: SitterFilterFormData) => void;
}
