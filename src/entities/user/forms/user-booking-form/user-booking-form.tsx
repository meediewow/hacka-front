import React from 'react';
import Stack from '@mui/material/Stack';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { TextField } from '@/shared/lib/form/fields/text-field';
import { DateRangePickerFiled } from '@/shared/lib/form/fields/date-range-picker-filed';
import { getFields } from './fields';
import type { UserBookingFormProps } from './types';

export const UserBookingForm: React.FC<UserBookingFormProps> = ({
    onSubmit,
    defaultValues,
}) => {
    const { fields } = useFields(getFields);

    return (
        <Form fields={fields} onSubmit={onSubmit} defaultValues={defaultValues}>
            <Stack spacing={1}>
                <DateRangePickerFiled field={fields.date} />
                <TextField
                    field={fields.specialRequest}
                    multiline
                    minRows={3}
                    maxlength={160}
                />
                <FormSubmit label="Забронировать" />
            </Stack>
        </Form>
    );
};
