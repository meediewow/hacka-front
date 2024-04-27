import React from 'react';
import Box from '@mui/material/Box';
import { FormProvider, useForm } from 'react-hook-form';
import { useResolver } from './resolver';
import type { FormProps, FieldValues } from './types';

export const Form = <T extends FieldValues>({
    sx,
    fields,
    onSubmit,
    children,
    defaultValues,
}: React.PropsWithChildren<FormProps<T>>) => {
    const resolver = useResolver<T>(fields);

    const methods = useForm<T>({ defaultValues, resolver });

    return (
        <FormProvider {...methods}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={methods.handleSubmit((data: T) => onSubmit(data))}
                sx={sx}
            >
                {children}
            </Box>
        </FormProvider>
    );
};
