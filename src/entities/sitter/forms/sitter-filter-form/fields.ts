import { stringSchema } from '@/shared/schema/string';
import type { Fields } from '@/shared/lib/form';
import type { SitterFilterFormData } from './types';

export const getFields = (): Fields<SitterFilterFormData> => ({
    login: {
        label: 'Логин',
        validate: () => stringSchema().default(''),
    },
    password: {
        label: 'Пароль',
        validate: () => stringSchema().default(''),
    },
});
