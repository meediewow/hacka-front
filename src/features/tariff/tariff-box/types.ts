import { TariffFormData } from '@/entities/tariff/forms/tariff-form';

export type TariffBoxProps = {
    value: TariffFormData[];
    onAdd?: (pet: TariffFormData) => void;
};
