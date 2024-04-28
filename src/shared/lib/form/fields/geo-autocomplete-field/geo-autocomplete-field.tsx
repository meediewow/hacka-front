import { useController } from 'react-hook-form';
import { GeoAutocomplete } from '@/shared/geo';
import type { GeoAutocompleteFieldProps } from './types';
import type { FieldValues } from '@/shared/lib/form/types';

export const GeoAutocompleteField = <T extends FieldValues>({
    field: { name, label },
    ...props
}: GeoAutocompleteFieldProps<T>) => {
    const {
        field: { value, onChange, ...field },
        fieldState,
    } = useController<T>({
        name,
    });

    return (
        <GeoAutocomplete
            {...props}
            {...field}
            label={label}
            value={value ?? null}
            onChange={onChange}
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
        />
    );
};
