import { Tariff } from '../types';
import { TariffFormData } from '../forms/tariff-form';
import { getPetTypeMapLabel } from '@/entities/pet/utils/pet-type';

export const mapTariffToTariffFormData = (tariff: Tariff): TariffFormData => {
    return {
        category: {
            id: tariff.category,
            name: getPetTypeMapLabel(tariff.category) ?? '',
        },
        pricePerDay: tariff.pricePerDay,
    };
};
