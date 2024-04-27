import { useController } from 'react-hook-form';
import { PasswordField as $PasswordField } from '@/shared/ui/password-field';
import type { FieldValues } from '../../types';
import type { PasswordFieldProps } from './types';

export const PasswordField = <T extends FieldValues>({
    field: { name, label },
    ...props
}: PasswordFieldProps<T>) => {
    const {
        field: { value, onChange, ...field },
        fieldState,
    } = useController<T>({
        name,
    });

    return (
        <$PasswordField
            {...props}
            {...field}
            id={name}
            label={label}
            value={value ?? ''}
            onChange={(event) => onChange(event.target.value)}
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
        />
    );
};
