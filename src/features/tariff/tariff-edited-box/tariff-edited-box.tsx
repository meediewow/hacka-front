import React from 'react';

import { TariffBox } from '@/features/tariff/tariff-box/tariff-box';
import { mapTariffToTariffFormData } from '@/entities/tariff/mappers/tariff-tariff-form';
import { useAddTariffMutation } from '@/entities/tariff/api/add-tariff.mutation';
import { Tariff } from '@/entities/tariff/types';
import { enqueueSnackbar } from 'notistack';
import { TariffFormData } from '@/entities/tariff/forms/tariff-form';

type Props = {
    initialTariffs: Tariff[];
};

export const TariffEditedBox: React.FC<Props> = ({ initialTariffs }) => {
    const addTariffMutation = useAddTariffMutation();

    const [tariffs, setTariffs] = React.useState(
        React.useMemo(
            () => initialTariffs?.map(mapTariffToTariffFormData) ?? [],
            [initialTariffs]
        )
    );

    const handleAddTariff = React.useCallback(
        async (newTariff: TariffFormData) => {
            try {
                const { list } = await addTariffMutation.mutateAsync({
                    category: newTariff.category.id,
                    pricePerDay: newTariff.pricePerDay as number,
                });

                setTariffs(list?.map(mapTariffToTariffFormData));
            } catch (error) {
                enqueueSnackbar((error as { message: string }).message, {
                    variant: 'error',
                });
            }
        },
        [addTariffMutation]
    );

    return <TariffBox value={tariffs} onAdd={handleAddTariff} />;
};
