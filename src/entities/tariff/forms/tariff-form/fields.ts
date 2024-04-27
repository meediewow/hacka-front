import type { Fields } from '@/shared/lib/form';
import type { TariffFormData } from './types';
import { selectSchema } from '@/shared/schema/option';
import { z } from 'zod';

export const getFields = (): Fields<TariffFormData> => ({
    pricePerDay: {
        label: 'Стоимость за сутки',
        validate: () => z.coerce.number().default(0),
    },
    category: {
        label: 'Категория',
        validate: () => selectSchema(),
    },
});
