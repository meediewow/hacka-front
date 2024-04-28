import { z } from 'zod';
import { DateTime } from 'luxon';

export const dateRangePickerSchema = () => {
    return z
        .array(
            z.custom<DateTime>((t) => t instanceof DateTime),
            { message: 'Поле должно быть заполнено' }
        )
        .min(2, { message: 'Поле должно быть заполнено' });
};

export const dateRangePickerNotRequiredSchema = () => {
    return dateRangePickerSchema().nullable().default([]);
};
