import { stringSchema } from '@/shared/schema/string';
import type { Fields } from '@/shared/lib/form';
import type { RegisterFormData } from './types';
import { z } from 'zod';

/**
 *
 * @param isFirstRegister - нужен для оперделения первая ли это регистрация, или повторая в качестве ситтера
 * @returns
 */
export const getFields = (isFirstRegister: boolean) => (): Fields<RegisterFormData> => ({
    login: {
        label: 'Логин',
        validate: () =>
            isFirstRegister ? stringSchema().default('') : z.string().nullable(),
    },
    password: {
        label: 'Пароль',
        validate: () =>
            isFirstRegister ? stringSchema().default('') : z.string().nullable(),
    },

    name: {
        label: 'Ваше имя',
        validate: () => stringSchema().default(''),
    },
    phone: {
        label: 'Контактный телефон',
        validate: () => stringSchema().default(''),
    },
});
