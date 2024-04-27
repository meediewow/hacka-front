import { AuthLevel } from '../../types';

export interface RegisterFormData {
    login?: string;
    password?: string;
    name?: string;
    phone?: string;
}

export interface RegisterFormProps {
    onSubmit: (data: RegisterFormData) => void;
    isFirstRegister: boolean;
    authLevel: AuthLevel;
}
