import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useController } from 'react-hook-form';
import type { Option } from '@/shared/types/option';
import type { FieldValues } from '@/shared/lib/form/types';
import type { MultipleAutocompleteFieldProps } from './types';

const getOptionLabel = <TOption extends Option = Option>(option: TOption) => option.name;

const isOptionEqualToValue = <TOption extends Option = Option>(
    option: TOption,
    value: TOption
) => {
    return option.id === value.id;
};

export const MultipleAutocompleteField = <T extends FieldValues>({
    field: { name, label },
    ...props
}: MultipleAutocompleteFieldProps<T>) => {
    const {
        field: { value, onChange, ...field },
    } = useController<T>({
        name,
    });

    return (
        <Autocomplete
            {...props}
            {...field}
            multiple
            fullWidth
            disableCloseOnSelect
            value={value ?? []}
            onChange={(_, newValue) => onChange(newValue)}
            renderInput={(params) => <TextField {...params} label={label} />}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={isOptionEqualToValue}
        />
    );
};