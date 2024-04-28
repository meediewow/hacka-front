import type { DateRange } from '@/shared/types/date';
import type { OptionBase } from '@/shared/types/option-base';

export interface UserBookingFormData {
    date: DateRange;
    pets: OptionBase[];
    specialRequest?: string;
}

export interface UserBookingFormProps {
    onSubmit: (data: UserBookingFormData) => void;
    petsOptions: OptionBase[];
    defaultValues?: Partial<UserBookingFormData>;
}
