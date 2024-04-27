import type { DateRange } from '@/shared/types/date';

export interface SitterBookingFormData {
    date: DateRange;
}

export interface SitterBookingFormProps {
    onSubmit: (data: SitterBookingFormData) => void;
}
