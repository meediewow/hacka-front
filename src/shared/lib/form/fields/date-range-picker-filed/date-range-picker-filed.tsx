import { useController } from 'react-hook-form';
import { DateRangePicker, SingleInputDateRangeField } from '@mui/x-date-pickers-pro';
import type { FieldValues } from '@/shared/lib/form/types';
import type { DateRangePickerFiledProps } from './types';

export const DateRangePickerFiled = <T extends FieldValues>({
    field: { name, label },
    ...props
}: DateRangePickerFiledProps<T>) => {
    const {
        field: { value, onChange, ...field },
    } = useController<T>({
        name,
    });

    return (
        <DateRangePicker
            {...props}
            {...field}
            label={label}
            value={value ?? [null, null]}
            onChange={onChange}
            slots={{ field: SingleInputDateRangeField }}
        />
    );
};
