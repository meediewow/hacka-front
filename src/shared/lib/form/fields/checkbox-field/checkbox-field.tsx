import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useController } from 'react-hook-form';
import type { FieldValues } from '../../types';
import type { CheckboxFieldProps } from './types';

export const CheckboxField = <T extends FieldValues>({
    field: { name, label },
    ...props
}: CheckboxFieldProps<T>) => {
    const {
        field: { value, onChange, ...field },
    } = useController<T>({
        name,
    });

    return (
        <FormControlLabel
            control={<Checkbox />}
            {...props}
            {...field}
            id={name}
            label={label}
            value={value ?? ''}
            onChange={(_, checked) => onChange(checked)}
        />
    );
};
