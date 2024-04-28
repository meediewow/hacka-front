import { PetFormData } from '@/entities/pet/forms/pet-form';
import { SxProps, Theme } from '@mui/material/styles';

export type PetsBoxProps = {
    value: PetFormData[];
    onAdd?: (pet: PetFormData) => void;
    sx?: SxProps<Theme>;
};
