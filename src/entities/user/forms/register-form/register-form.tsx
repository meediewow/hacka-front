import React from 'react';
import Stack from '@mui/material/Stack';
import { Form, FormSubmit, useFields } from '@/shared/lib/form';
import { TextField } from '@/shared/lib/form/fields/text-field';
import { PasswordField } from '@/shared/lib/form/fields/password-field';
import { getFields } from './fields';
import { PetsField } from '@/features/pet/fields/pets-field';
import { TariffsField } from '@/features/tariff/fields/tariff-field';
import { GeoAutocompleteField } from '@/shared/lib/form/fields/geo-autocomplete-field';
import type { RegisterFormProps } from './types';

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, authLevel }) => {
    const { fields } = useFields(getFields());

    return (
        <Form fields={fields} onSubmit={onSubmit}>
            <Stack spacing={1.5}>
                <TextField field={fields.login} required />
                <PasswordField field={fields.password} required />
                <TextField field={fields.name} required />
                <TextField field={fields.phone} required />

                <TextField field={fields.about} required multiline minRows={3} />

                {authLevel === 'client' && (
                    <PetsField
                        sx={{
                            backgroundColor: (theme) => theme.palette.grey[100],
                        }}
                        field={fields.pets}
                    />
                )}

                {authLevel === 'sitter' && (
                    <>
                        <TariffsField field={fields.tariffs} />
                        <GeoAutocompleteField field={fields.address} />
                    </>
                )}

                <FormSubmit label="Зарегистрироваться" />
            </Stack>
        </Form>
    );
};
