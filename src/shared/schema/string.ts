import { z } from 'zod';

export const stringNotRequiredSchema = () => {
    return z.string().trim();
};

export const stringSchema = () => {
    return stringNotRequiredSchema().min(1, {
        message: 'Поле должно быть заполнено',
    });
};

export const maxStringNotRequiredSchema = (maxLength: number) => {
    return stringNotRequiredSchema().max(maxLength, {
        message: `${'Максимальное количество символов'}: ${maxLength}`,
    });
};

export const maxStringSchema = (maxLength: number) => {
    return stringSchema().max(maxLength, {
        message: `${'Максимальное количество символов'}: ${maxLength}`,
    });
};
