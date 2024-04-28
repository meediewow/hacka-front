import React from 'react';
import Stack from '@mui/material/Stack';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { TextField } from '@/shared/lib/form/fields/text-field';
import { getFields } from './fields';
import type { RateFormProps } from './types';

export const RateForm: React.FC<RateFormProps> = ({ onSubmit }) => {
    const { fields } = useFields(getFields);

    return (
        <Form fields={fields} onSubmit={onSubmit}>
            <Stack spacing={1.5}>
                <TextField field={fields.comment} multiline minRows={3} />

                <TextField field={fields.rate} />

                <FormSubmit label="Оставить отзыв" />
            </Stack>
        </Form>
    );
};
