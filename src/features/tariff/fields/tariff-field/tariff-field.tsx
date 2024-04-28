import { useController } from 'react-hook-form';
import { TariffBox } from '../../tariff-box/tariff-box';
import type { FieldValues } from '@/shared/lib/form/types';
import type { TariffFormData } from '@/entities/tariff/forms/tariff-form';
import type { TariffsFieldProps } from './types';

export const TariffsField = <T extends FieldValues>({
    field: { name },
    sx,
}: TariffsFieldProps<T>) => {
    const {
        field: { value, onChange },
    } = useController<T>({
        name,
    });

    const tariffs = (value as TariffFormData[]) ?? [];

    return (
        <TariffBox
            sx={sx}
            value={tariffs}
            onAdd={(tariff) => {
                onChange([...tariffs, tariff]);
            }}
        />
    );
};
