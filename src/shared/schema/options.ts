import { z } from 'zod';

export const optionsSchema = () => {
    return z
        .array(
            z.object(
                { id: z.number(), name: z.string() },
                { required_error: 'Поле должно быть заполнено' }
            )
        )
        .min(1, { message: 'Поле должно быть заполнено' });
};

export const optionsNotRequiredSchema = () => {
    return optionsSchema().nullable().default(null);
};
