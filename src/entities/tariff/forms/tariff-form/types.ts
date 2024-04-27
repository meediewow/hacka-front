import { PetType } from '@/entities/pet/enum';
import { FieldsConfig } from '@/shared/lib/form/types';
import { OptionBase } from '@/shared/types/option-base';

export interface TariffFormData {
    category: OptionBase<PetType>;
    pricePerDay?: number;
}

export interface TariffFormProps {
    fields: FieldsConfig<TariffFormData>;
}
