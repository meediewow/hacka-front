import { FieldsConfig } from '@/shared/lib/form/types';
import { PetType } from '../../enum';
import { OptionBase } from '@/shared/types/option-base';

export interface PetFormData {
    name: string;
    category: OptionBase<PetType>;
    age?: number;
    comment?: string;
}

export interface PetFormProps {
    fields: FieldsConfig<PetFormData>;
}
