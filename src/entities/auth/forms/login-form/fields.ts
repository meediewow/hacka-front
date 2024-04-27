import { stringSchema } from '@/shared/schema/string';
import type { Fields } from '@/shared/lib/form';
import type { LoginFormData } from './types';

export const getFields = (): Fields<LoginFormData> => ({
    login: {
        label: 'Логин',
        validate: () => stringSchema().default(''),
    },
    password: {
        label: 'Пароль',
        validate: () => stringSchema().default(''),
    },
});
