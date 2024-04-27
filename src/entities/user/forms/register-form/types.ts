import { PetFormData } from '@/entities/pet/forms/pet-form';
import { AuthLevel } from '../../types';

export interface RegisterFormData {
    login?: string;
    password?: string;
    name?: string;
    phone?: string;

    pets?: PetFormData[];
}

export interface RegisterFormProps {
    onSubmit: (data: RegisterFormData) => void;
    isFirstRegister: boolean;
    authLevel: AuthLevel;
}
