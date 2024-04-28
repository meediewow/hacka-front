import { z } from 'zod';

export const numberOptionsSchema = () => {
    return z
        .array(
            z.object(
                { id: z.number(), name: z.string() },
                { required_error: 'Поле должно быть заполнено' }
            )
        )
        .min(1, { message: 'Поле должно быть заполнено' });
};

export const numberOptionsNotRequiredSchema = () => {
    return numberOptionsSchema().nullable().default(null);
};

export const stringOptionsSchema = () => {
    return z
        .array(
            z.object(
                { id: z.string(), name: z.string() },
                { required_error: 'Поле должно быть заполнено' }
            )
        )
        .min(1, { message: 'Поле должно быть заполнено' });
};

export const stringOptionsNotRequiredSchema = () => {
    return stringOptionsSchema().nullable().default(null);
};
