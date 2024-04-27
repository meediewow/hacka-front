import React from 'react';
import Stack from '@mui/material/Stack';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { DateRangePickerFiled } from '@/shared/lib/form/fields/date-range-picker-filed';
import { getFields } from './fields';
import type { SitterBookingFormProps } from './types';

export const SitterBookingForm: React.FC<SitterBookingFormProps> = ({ onSubmit }) => {
    const { fields } = useFields(getFields);

    return (
        <Form fields={fields} onSubmit={onSubmit}>
            <Stack spacing={1}>
                <DateRangePickerFiled field={fields.date} />
                <FormSubmit label="Забронировать" />
            </Stack>
        </Form>
    );
};
