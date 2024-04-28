import { stringSchema } from '@/shared/schema/string';
import type { Fields } from '@/shared/lib/form';
import type { MakeSitterFormData } from './types';

export const getFields = () => (): Fields<MakeSitterFormData> => ({
    address: {
        label: 'Адрес',
    },
    about: {
        label: 'О себе',
        validate: () => stringSchema().default(''),
    },
    tariffs: {
        label: 'Тарифы',
    },
});
