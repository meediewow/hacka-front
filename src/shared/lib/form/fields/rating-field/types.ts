import type { RatingProps } from '@mui/material/Rating';
import type { BaseFieldProps, FieldValues } from '@/shared/lib/form/types';

export interface RatingFieldProps<T extends FieldValues>
    extends BaseFieldProps<T>,
        Pick<RatingProps, 'size'> {}
