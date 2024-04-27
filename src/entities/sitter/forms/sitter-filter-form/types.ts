import type { DateRange } from '@/shared/types/date.ts';

export interface SitterFilterFormData {
    category: string;
    date: DateRange;
    address: string;
}

export interface SitterFilterFormProps {
    onSubmit: (data: SitterFilterFormData) => void;
}
