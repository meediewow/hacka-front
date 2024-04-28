import type { DateRange } from '@/shared/types/date';

export interface UserBookingFormData {
    date: DateRange;
    specialRequest?: string;
}

export interface UserBookingFormProps {
    onSubmit: (data: UserBookingFormData) => void;
    defaultValues?: Partial<UserBookingFormData>;
}
