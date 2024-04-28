import { stringNotRequiredSchema } from '@/shared/schema/string';
import { optionsSchema } from '@/shared/schema/options';
import type { Fields } from '@/shared/lib/form';
import type { SitterFilterFormData } from './types';

export const getFields = (): Fields<SitterFilterFormData> => ({
    categories: {
        label: 'Pet-категория',
        validate: () => optionsSchema().default([]),
    },
    date: {
        label: 'Дата',
        // validate: () => dateRangePickerNotRequiredSchema().default([]),
    },
    address: {
        label: 'Адрес',
        validate: () => stringNotRequiredSchema().default(''),
    },
});
