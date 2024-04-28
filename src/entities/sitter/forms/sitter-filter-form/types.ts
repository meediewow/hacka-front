import type { DateRange } from '@/shared/types/date';
import type { OptionBase } from '@/shared/types/option-base';

export interface SitterFilterFormData {
    categories: OptionBase<number>[];
    date: DateRange;
    address: string;
}

export interface SitterFilterFormProps {
    onSubmit: (data: SitterFilterFormData) => void;
}
