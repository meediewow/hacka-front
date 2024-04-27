import React from 'react';
import type { FieldPath, FieldValues, UseFormSetValue } from 'react-hook-form';
import type { FieldsConfig } from '../types';

export interface FormWatchProps<
    T extends FieldValues,
    N extends FieldPath<T> = FieldPath<T>,
> {
    fields: FieldsConfig<T>;
    deps: N[];
    children: (data: T, helpers: { setValue: UseFormSetValue<T> }) => React.ReactNode;
}
