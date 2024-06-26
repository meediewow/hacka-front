import React from 'react';
import Stack from '@mui/material/Stack';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { TextField } from '@/shared/lib/form/fields/text-field';
import { TariffsField } from '@/features/tariff/fields/tariff-field';
import { GeoAutocompleteField } from '@/shared/lib/form/fields/geo-autocomplete-field';
import { getFields } from './fields';
import type { MakeSitterFormProps } from './types';

export const MakeSitterForm: React.FC<MakeSitterFormProps> = ({ onSubmit }) => {
    const { fields } = useFields(getFields());

    return (
        <Form fields={fields} onSubmit={onSubmit}>
            <Stack spacing={1.5}>
                <GeoAutocompleteField field={fields.address} required />

                <TextField field={fields.about} required multiline minRows={3} />

                <TariffsField field={fields.tariffs} />

                <FormSubmit label="Стать ситтером" />
            </Stack>
        </Form>
    );
};
