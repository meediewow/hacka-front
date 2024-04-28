import { stringSchema } from '@/shared/schema/string';
import type { Fields } from '@/shared/lib/form';
import type { MakeSitterFormData } from './types';

export const getFields = () => (): Fields<MakeSitterFormData> => ({
    about: {
        label: 'О себе',
        validate: () => stringSchema().default(''),
    },
    address: {
        label: 'Адрес',
        validate: () => stringSchema().default(''),
    },

    tariffs: {
        label: 'Тарифы',
        // validate: () => stringSchema().default(''),
    },
});
