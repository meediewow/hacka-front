import { PetFormData } from '../forms/pet-form';
import { Pet } from '../types';
import { getPetTypeMapLabel } from '@/entities/pet/utils/pet-type';

export const mapPetToPetFormData = (pet: Pet): PetFormData => {
    return {
        name: pet.name ?? '',
        category: {
            id: pet.category,
            name: getPetTypeMapLabel(pet.category),
        },
        age: pet.age,
        comment: pet.comment,
    };
};
