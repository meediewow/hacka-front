import { PetFormData } from '@/entities/pet/forms/pet-form';

export type PetsBoxProps = {
    value: PetFormData[];
    onAdd?: (pet: PetFormData) => void;
};
