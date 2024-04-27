import { stringSchema } from '@/shared/schema/string';
import type { Fields } from '@/shared/lib/form';
import type { RegisterFormData } from './types';
// import { z } from 'zod';

/**
 *
 * @param isFirstRegister - нужен для оперделения первая ли это регистрация, или повторая в качестве ситтера
 * @returns
 */
export const getFields = () => (): Fields<RegisterFormData> => ({
    login: {
        label: 'Логин',
        validate: () => stringSchema().default(''),
    },
    password: {
        label: 'Пароль',
        validate: () => stringSchema().default(''),
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
