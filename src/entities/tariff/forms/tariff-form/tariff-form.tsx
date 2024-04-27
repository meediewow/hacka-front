import React from 'react';
import Stack from '@mui/material/Stack';
import { TextField } from '@/shared/lib/form/fields/text-field';

import type { TariffFormProps } from './types';
import { AutocompleteField } from '@/shared/lib/form/fields/autocomplete-field';
import { getPetTypeMapOptions } from '@/entities/pet/utils/pet-type';

export const TariffForm: React.FC<TariffFormProps> = ({ fields }) => {
    return (
        <Stack spacing={1.5}>
            <AutocompleteField field={fields.category} options={getPetTypeMapOptions()} />

            <TextField field={fields.pricePerDay} />
        </Stack>
    );
};
