import { z } from 'zod';

export const optionSchema = () => {
    return z.object(
        { id: z.number(), name: z.string() },
        { required_error: 'Поле должно быть заполнено' }
    );
};

export const optionNotRequiredSchema = () => {
    return optionSchema().nullable().default(null);
};
