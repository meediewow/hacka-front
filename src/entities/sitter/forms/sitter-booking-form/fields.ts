import { dateRangePickerSchema } from '@/shared/schema/date-range-picker';
import type { Fields } from '@/shared/lib/form';
import type { SitterBookingFormData } from './types';

export const getFields = (): Fields<SitterBookingFormData> => ({
    date: {
        label: 'Дата',
        validate: () => dateRangePickerSchema().default([]),
    },
});
