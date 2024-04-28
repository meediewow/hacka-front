import type { UserBookingFormData } from '@/entities/user/forms/user-booking-form/types';
import type { CreateOrderVariables } from '@/entities/orders/types';

export const dataToVariables = (
    sitterId: string,
    data: UserBookingFormData
): CreateOrderVariables => {
    const start = data.date?.[0]?.toISO();
    const end = data.date?.[1]?.toISO();

    return {
        sitterId,
        period: start && end ? { start, end } : undefined,
        petIds: data.pets.map((pet) => pet.id),
    };
};
