import { numberOptionsSchema } from '@/shared/schema/options';
import type { Fields } from '@/shared/lib/form';
import type { SitterFilterFormData } from './types';

export const getFields = (): Fields<SitterFilterFormData> => ({
    categories: {
        label: 'Pet-категория',
        validate: () => numberOptionsSchema().default([]),
    },
    date: {
        label: 'Дата',
    },
    address: {
        label: 'Адрес',
    },
});
