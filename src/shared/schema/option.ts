import { z } from 'zod';

export const selectSchema = () => {
    return z.object(
        { id: z.number(), name: z.string() },
        { required_error: 'Поле должно быть заполнено' }
    );
};

export const selectNotRequiredSchema = () => {
    return selectSchema().nullable().default(null);
};
