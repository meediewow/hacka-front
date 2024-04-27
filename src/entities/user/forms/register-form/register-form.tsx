import React from 'react';
import Stack from '@mui/material/Stack';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { TextField } from '@/shared/lib/form/fields/text-field';
import { PasswordField } from '@/shared/lib/form/fields/password-field';
import { getFields } from './fields';
import type { RegisterFormProps } from './types';

export const RegisterForm: React.FC<RegisterFormProps> = ({
    onSubmit,
    isFirstRegister,
}) => {
    const { fields } = useFields(getFields(isFirstRegister));

    return (
        <Form fields={fields} onSubmit={onSubmit}>
            <Stack spacing={1.5}>
                {isFirstRegister && (
                    <>
                        <TextField field={fields.login} />
                        <PasswordField field={fields.password} />
                    </>
                )}

                <FormSubmit label="Зарегистрироваться" />
            </Stack>
        </Form>
    );
};
