import React from 'react';
import Stack from '@mui/material/Stack';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { TextField } from '@/shared/lib/form/fields/text-field';
import { AutocompleteField } from '@/shared/lib/form/fields/autocomplete-field';
import { DateRangePickerFiled } from '@/shared/lib/form/fields/date-range-picker-filed';
import { getFields } from './fields';
import type { SitterFilterFormProps } from './types';

export const SitterFilterForm: React.FC<SitterFilterFormProps> = ({ onSubmit }) => {
    const { fields } = useFields(getFields);

    return (
        <Form fields={fields} onSubmit={onSubmit}>
            <Stack spacing={1}>
                <AutocompleteField
                    field={fields.category}
                    options={[
                        { id: 1, name: 'name 1' },
                        { id: 2, name: 'name 2' },
                    ]}
                />
                <DateRangePickerFiled field={fields.date} />
                <TextField field={fields.address} />
                <FormSubmit label="Найти" />
            </Stack>
        </Form>
    );
};