import { z } from 'zod';

export const dateRangePickerSchema = () => {
    return z.array(z.object({})).min(2, { message: 'Поле должно быть заполнено' });
};

export const dateRangePickerNotRequiredSchema = () => {
    return dateRangePickerSchema().nullable().default([]);
};
