import { useController } from 'react-hook-form';
import type { FieldValues } from '@/shared/lib/form/types';
import type { TariffsFieldProps } from './types';
import { TariffFormData } from '@/entities/tariff/forms/tariff-form';
import { TariffBox } from '../../tariff-box/tariff-box';

export const TariffsField = <T extends FieldValues>({
    field: { name },
}: TariffsFieldProps<T>) => {
    const {
        field: { value, onChange },
    } = useController<T>({
        name,
    });

    const tariffs = (value as TariffFormData[]) ?? [];

    return (
        <TariffBox
            value={tariffs}
            onAdd={(tariff) => {
                onChange([...tariffs, tariff]);
            }}
        />
    );
};
