import type { DateRange } from '@/shared/types/date';

export interface SitterFilterFormData {
    category: string;
    date: DateRange;
    address: string;
}

export interface SitterFilterFormProps {
    onSubmit: (data: SitterFilterFormData) => void;
}
