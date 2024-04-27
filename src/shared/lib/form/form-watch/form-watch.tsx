import { useFormContext, useWatch, type FieldValues } from 'react-hook-form';
import type { FormWatchProps } from './types';

export const FormWatch = <T extends FieldValues>({
    deps,
    children,
}: FormWatchProps<T>) => {
    const methods = useFormContext<T>();

    useWatch({ name: deps });

    return children(methods.getValues(), { setValue: methods.setValue });
};
