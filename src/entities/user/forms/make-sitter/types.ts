import { TariffFormData } from '@/entities/tariff/forms/tariff-form';

export interface MakeSitterFormData {
    about?: string;
    address?: string;

    tariffs?: TariffFormData[];
}

export interface MakeSitterFormProps {
    onSubmit: (data: MakeSitterFormData) => void;
}
