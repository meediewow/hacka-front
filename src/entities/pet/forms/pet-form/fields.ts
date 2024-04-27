import { maxStringNotRequiredSchema, stringSchema } from '@/shared/schema/string';
import { optionSchema } from '@/shared/schema/option';
import type { Fields } from '@/shared/lib/form';
import type { PetFormData } from './types';

import { z } from 'zod';

export const getFields = (): Fields<PetFormData> => ({
    name: {
        label: 'Кличка питомца',
        validate: () => stringSchema().default(''),
    },
    category: {
        label: 'Категория',
        validate: () => optionSchema(),
    },
    age: {
        label: 'Возраст',
        validate: () => z.coerce.number().int().default(0),
    },
    comment: {
        label: 'Комментарий',
        validate: () => maxStringNotRequiredSchema(50).default(''),
    },
});
