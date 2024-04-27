import LoadingButton from '@mui/lab/LoadingButton';
import { useFormState } from 'react-hook-form';
import type { FieldValues } from '../types';
import type { FormSubmitProps } from './types';

export const FormSubmit = <T extends FieldValues>({
    sx,
    label,
    execute,
    renderButton,
}: FormSubmitProps<T>) => {
    const { isSubmitting, isValid } = useFormState();

    if (renderButton) {
        return <>{renderButton({ isSubmitting, isValid })}</>;
    }

    return (
        <LoadingButton
            fullWidth
            type="submit"
            size="large"
            variant="contained"
            onClick={execute}
            loading={isSubmitting}
            sx={sx}
        >
            {label}
        </LoadingButton>
    );
};
