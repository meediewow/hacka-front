import { PetFormData } from '@/entities/pet/forms/pet-form';
import { AuthLevel } from '../../types';
import { TariffFormData } from '@/entities/tariff/forms/tariff-form';

export interface RegisterFormData {
    login?: string;
    password?: string;
    name?: string;
    phone?: string;

    pets?: PetFormData[];
    tariffs?: TariffFormData[];
}

export interface RegisterFormProps {
    onSubmit: (data: RegisterFormData) => void;
    isFirstRegister: boolean;
    authLevel: AuthLevel;
}
