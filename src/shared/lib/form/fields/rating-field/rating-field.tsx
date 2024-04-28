import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useController } from 'react-hook-form';
import type { RatingFieldProps } from './types';
import type { FieldValues } from '@/shared/lib/form/types';

export const RatingField = <T extends FieldValues>({
    field: { name, label },
    sx,
    ...props
}: RatingFieldProps<T>) => {
    const {
        field: { value, onChange, ...field },
    } = useController<T>({
        name,
    });

    return (
        <Box sx={sx}>
            {label && <Typography component="legend">{label}</Typography>}
            <Rating
                {...props}
                {...field}
                value={value}
                onChange={(_, newValue) => {
                    onChange(newValue);
                }}
            />
        </Box>
    );
};
