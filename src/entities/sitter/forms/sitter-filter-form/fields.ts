import { stringSchema } from '@/shared/schema/string';
import type { Fields } from '@/shared/lib/form';
import type { SitterFilterFormData } from './types';

export const getFields = (): Fields<SitterFilterFormData> => ({
    category: {
        label: 'Pet-категория',
        validate: () => stringSchema().default(''),
    },
    date: {
        label: 'Дата',
        validate: () => stringSchema().default(''),
    },
    address: {
        label: 'Адрес',
        validate: () => stringSchema().default(''),
    },
});
