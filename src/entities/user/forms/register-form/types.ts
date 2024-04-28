import { PetFormData } from '@/entities/pet/forms/pet-form';
import { AuthLevel } from '../../types';
import { TariffFormData } from '@/entities/tariff/forms/tariff-form';
import type { AutocompleteGeoOption } from '@/shared/geo';

export interface RegisterFormData {
    login?: string;
    password?: string;
    name?: string;
    phone?: string;
    about?: string;

    pets?: PetFormData[];
    tariffs?: TariffFormData[];
    address?: AutocompleteGeoOption | null;
}

export interface RegisterFormProps {
    onSubmit: (data: RegisterFormData) => void;
    authLevel: AuthLevel;
}
