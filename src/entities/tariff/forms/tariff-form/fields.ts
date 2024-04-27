import { z } from 'zod';
import { optionSchema } from '@/shared/schema/option';
import type { Fields } from '@/shared/lib/form';
import type { TariffFormData } from './types';

export const getFields = (): Fields<TariffFormData> => ({
    pricePerDay: {
        label: 'Стоимость за сутки',
        validate: () => z.coerce.number().default(0),
    },
    category: {
        label: 'Категория',
        validate: () => optionSchema(),
    },
});
