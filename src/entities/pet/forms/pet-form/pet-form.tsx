import React from 'react';
import Stack from '@mui/material/Stack';
import { TextField } from '@/shared/lib/form/fields/text-field';

import type { PetFormProps } from './types';
import { AutocompleteField } from '@/shared/lib/form/fields/autocomplete-field';
import { getPetTypeMapOptions } from '../../utils/pet-type';

export const PetForm: React.FC<PetFormProps> = ({ fields }) => {
    return (
        <Stack spacing={1.5}>
            <TextField field={fields.name} />

            <AutocompleteField field={fields.category} options={getPetTypeMapOptions()} />

            <TextField field={fields.age} />

            <TextField field={fields.comment} multiline />
        </Stack>
    );
};
