import React from 'react';
import Stack from '@mui/material/Stack';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { TextField } from '@/shared/lib/form/fields/text-field';
import { getFields } from './fields';
import type { PetFormProps } from './types';
import { AutocompleteField } from '@/shared/lib/form/fields/autocomplete-field';
import { getPetTypeMapOptions } from '../../utils/pet-type';

export const PetForm: React.FC<PetFormProps> = ({ onSubmit }) => {
    const { fields } = useFields(getFields);

    return (
        <Form fields={fields} onSubmit={onSubmit}>
            <Stack spacing={1.5}>
                <TextField field={fields.name} />

                <AutocompleteField
                    field={fields.category}
                    options={getPetTypeMapOptions()}
                />

                <TextField field={fields.age} />

                <TextField field={fields.comment} multiline />

                <FormSubmit label="Добавить питомца" />
            </Stack>
        </Form>
    );
};
