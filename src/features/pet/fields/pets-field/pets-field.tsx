import { useController } from 'react-hook-form';
import type { FieldValues } from '@/shared/lib/form/types';
import type { PetsFieldProps } from './types';

import { PetsBox } from '../../pets-box/pets-box';
import { PetFormData } from '@/entities/pet/forms/pet-form';

export const PetsField = <T extends FieldValues>({
    field: { name },
}: PetsFieldProps<T>) => {
    const {
        field: { value, onChange },
    } = useController<T>({
        name,
    });

    const pets = (value as PetFormData[]) ?? [];

    return (
        <PetsBox
            value={pets}
            onAdd={(pet) => {
                onChange([...pets, pet]);
            }}
        />
    );
};
