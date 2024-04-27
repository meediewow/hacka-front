import React from 'react';
import Stack from '@mui/material/Stack';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { TextField } from '@/shared/lib/form/fields/text-field';
import { PasswordField } from '@/shared/lib/form/fields/password-field';
import { getFields } from './fields';
import type { SitterFilterFormProps } from './types';

export const SitterFilterForm: React.FC<SitterFilterFormProps> = ({ onSubmit }) => {
    const { fields } = useFields(getFields);

    return (
        <Form fields={fields} onSubmit={onSubmit}>
            <Stack spacing={1.5}>
                <TextField field={fields.login} />
                <PasswordField field={fields.password} />
                <FormSubmit label="Найти" />
            </Stack>
        </Form>
    );
};
