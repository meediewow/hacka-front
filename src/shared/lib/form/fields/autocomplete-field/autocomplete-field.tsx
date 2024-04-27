import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useController } from 'react-hook-form';
import type { Option } from '@/shared/types/option';
import type { FieldValues } from '@/shared/lib/form/types';
import type { AutocompleteFieldProps } from './types';

const getOptionLabel = <TOption extends Option = Option>(option: TOption) => option.name;

const isOptionEqualToValue = <TOption extends Option = Option>(
    option: TOption,
    value: TOption
) => {
    return option.id === value.id;
};

export const AutocompleteField = <T extends FieldValues>({
    field: { name, label },
    ...props
}: AutocompleteFieldProps<T>) => {
    const {
        field: { value, onChange, ...field },
        fieldState,
    } = useController<T>({
        name,
    });

    return (
        <Autocomplete
            {...props}
            {...field}
            fullWidth
            value={value ?? null}
            onChange={(_, newValue) => onChange(newValue)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                />
            )}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={isOptionEqualToValue}
        />
    );
};
