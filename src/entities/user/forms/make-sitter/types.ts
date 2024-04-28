import type { TariffFormData } from '@/entities/tariff/forms/tariff-form';
import type { AutocompleteGeoOption } from '@/shared/geo';

export interface MakeSitterFormData {
    about?: string;
    address?: AutocompleteGeoOption | null;
    tariffs?: TariffFormData[];
}

export interface MakeSitterFormProps {
    onSubmit: (data: MakeSitterFormData) => void;
}
