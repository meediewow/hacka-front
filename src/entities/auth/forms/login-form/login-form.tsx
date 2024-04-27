import React from 'react';
import Stack from '@mui/material/Stack';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { TextField } from '@/shared/lib/form/fields/text-field';
import { PasswordField } from '@/shared/lib/form/fields/password-field';
import { getFields } from './fields';
import type { LoginFormProps } from './types';

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const { fields } = useFields(getFields);

    return (
        <Form fields={fields} onSubmit={onSubmit}>
            <Stack spacing={1.5}>
                <TextField field={fields.login} />
                <PasswordField field={fields.password} />
                <FormSubmit label="Войти" />
            </Stack>
        </Form>
    );
};
