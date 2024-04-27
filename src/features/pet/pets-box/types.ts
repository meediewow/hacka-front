import { PetFormData } from '@/entities/pet/forms/pet-form';

export type PetsBoxProps = {
    value: PetFormData[];
    onChange: (pets: PetFormData[]) => void;

    isAddedDisabled?: boolean;
};
