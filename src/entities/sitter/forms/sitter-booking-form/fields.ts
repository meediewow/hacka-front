import type { Fields } from '@/shared/lib/form';
import type { SitterBookingFormData } from './types';

export const getFields = (): Fields<SitterBookingFormData> => ({
    date: {
        label: 'Дата',
        // validate: () => stringSchema().default(''),
    },
});
