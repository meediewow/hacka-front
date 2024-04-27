import React from 'react';
import Stack from '@mui/material/Stack';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { TextField } from '@/shared/lib/form/fields/text-field';
import { PasswordField } from '@/shared/lib/form/fields/password-field';
import { getFields } from './fields';
import type { RegisterFormProps } from './types';

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const { fields } = useFields(getFields());

    return (
        <Form fields={fields} onSubmit={onSubmit}>
            <Stack spacing={1.5}>
                <TextField field={fields.login} required />
                <PasswordField field={fields.password} required />
                <TextField field={fields.name} required />
                <TextField field={fields.phone} required />

                <FormSubmit label="Зарегистрироваться" />
            </Stack>
        </Form>
    );
};
