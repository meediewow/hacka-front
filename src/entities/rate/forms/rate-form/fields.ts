import { stringSchema } from '@/shared/schema/string';
import type { Fields } from '@/shared/lib/form';
import type { RateFormData } from './types';
import { z } from 'zod';

export const getFields = (): Fields<RateFormData> => ({
    comment: {
        label: 'Отзыв',
        validate: () => stringSchema().default(''),
    },
    rate: {
        label: 'Оценка',
        validate: () => z.coerce.number().default(0),
    },
});
