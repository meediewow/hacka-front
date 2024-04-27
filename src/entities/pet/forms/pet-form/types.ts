import { PetType } from '../../enum';

export interface PetFormData {
    name: string;
    category: PetType;
    age?: number;
    comment?: string;
}

export interface PetFormProps {
    onSubmit: (data: PetFormData) => void;
}
