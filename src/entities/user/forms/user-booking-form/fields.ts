import { dateRangePickerSchema } from '@/shared/schema/date-range-picker';
import { maxStringNotRequiredSchema } from '@/shared/schema/string';
import { stringOptionsSchema } from '@/shared/schema/options';
import type { Fields } from '@/shared/lib/form';
import type { UserBookingFormData } from './types';

export const getFields = (): Fields<UserBookingFormData> => ({
    date: {
        label: 'Дата',
        validate: () => dateRangePickerSchema().default([]),
    },
    pets: {
        label: 'Питомцы',
        validate: () => stringOptionsSchema().default([]),
    },
    specialRequest: {
        label: 'Особое пожелание',
        validate: () => maxStringNotRequiredSchema(160).default(''),
    },
});
