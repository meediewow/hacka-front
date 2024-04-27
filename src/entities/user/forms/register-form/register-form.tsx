import React from 'react';
import Stack from '@mui/material/Stack';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { TextField } from '@/shared/lib/form/fields/text-field';
import { PasswordField } from '@/shared/lib/form/fields/password-field';
import { getFields } from './fields';
import type { RegisterFormProps } from './types';
import { PetsField } from '@/features/pet/fields/pets-field';
import { TariffsField } from '@/features/tariff/fields/tariff-field';

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, authLevel }) => {
    const { fields } = useFields(getFields());

    return (
        <Form fields={fields} onSubmit={onSubmit}>
            <Stack spacing={1.5}>
                <TextField field={fields.login} required />
                <PasswordField field={fields.password} required />
                <TextField field={fields.name} required />
                <TextField field={fields.phone} required />

                {authLevel === 'client' && <PetsField field={fields.pets} />}

                {authLevel === 'sitter' && <TariffsField field={fields.tariffs} />}

                <FormSubmit label="Зарегистрироваться" />
            </Stack>
        </Form>
    );
};
