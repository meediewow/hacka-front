import { PetType } from '@/entities/pet/enum';
import type { SittersVariables } from '@/entities/sitter/types';
import type { SitterFilterFormData } from '@/entities/sitter/forms/sitter-filter-form/types';

export const defaultCategories = [
    PetType.Dog,
    PetType.SmallDog,
    PetType.Cat,
    PetType.SmallPet,
    PetType.Exotic,
    PetType.Bird,
];

export const dataToVariables = (data: SitterFilterFormData): SittersVariables => {
    const start = data.date?.[0]?.toISO();
    const end = data.date?.[1]?.toISO();
    const categories =
        data.categories.length == 0
            ? defaultCategories
            : data.categories.map((category) => category.id);

    return {
        category: categories,
        period: start && end ? { start, end } : undefined,
        coordinates: data.address ? [data.address.lng, data.address.lat] : undefined,
    };
};
