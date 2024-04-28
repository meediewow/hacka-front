import type { TariffFormData } from '@/entities/tariff/forms/tariff-form';
import type { SxProps, Theme } from '@mui/material/styles';

export type TariffBoxProps = {
    value: TariffFormData[];
    onAdd?: (pet: TariffFormData) => void;
    sx?: SxProps<Theme>;
};
