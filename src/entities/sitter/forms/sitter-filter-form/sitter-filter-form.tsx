import React from 'react';
import Stack from '@mui/material/Stack';
import { DateRangePicker, SingleInputDateRangeField } from '@mui/x-date-pickers-pro';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { TextField } from '@/shared/lib/form/fields/text-field';
import { getFields } from './fields';
import type { SitterFilterFormProps } from './types';

export const SitterFilterForm: React.FC<SitterFilterFormProps> = ({ onSubmit }) => {
    const { fields } = useFields(getFields);

    return (
        <Form fields={fields} onSubmit={onSubmit}>
            <Stack spacing={1}>
                <TextField field={fields.category} />
                <TextField field={fields.date} />
                <TextField field={fields.address} />

                <SingleInputDateRangeField label="Departure - Return" />

                <DateRangePicker
                    slots={{ field: SingleInputDateRangeField }}
                    name="allowedRange"
                />

                <FormSubmit label="Найти" />
            </Stack>
        </Form>
    );
};
