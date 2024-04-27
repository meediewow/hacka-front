import React from 'react';
import MuiTextField from '@mui/material/TextField';
import { useController } from 'react-hook-form';
import { MaxLength } from '@/shared/lib/form/fields/text-field/components/max-length';
import type { FieldValues } from '../../types';
import type { TextFieldProps } from './types';

export const TextField = <T extends FieldValues>({
    field: { name, label },
    min,
    max,
    maxlength,
    slots,
    ...props
}: TextFieldProps<T>) => {
    const {
        field: { value, onChange, ...field },
        fieldState,
    } = useController<T>({
        name,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        if (maxlength) {
            if (value.length <= maxlength) {
                onChange(value);
            }
        } else {
            onChange(value);
        }
    };

    const MaxLengthSlot = slots?.maxlength ?? MaxLength;

    return (
        <MuiTextField
            {...props}
            {...field}
            id={name}
            label={label}
            value={value ?? ''}
            onChange={handleChange}
            error={Boolean(fieldState.error)}
            helperText={
                maxlength ? (
                    <MaxLengthSlot value={value} maxlength={maxlength}>
                        {fieldState.error?.message}
                    </MaxLengthSlot>
                ) : (
                    fieldState.error?.message
                )
            }
            inputProps={{ min, max }}
        />
    );
};
