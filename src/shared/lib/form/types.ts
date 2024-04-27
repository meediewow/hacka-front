import React from 'react';
import type { Schema } from 'zod';
import type { FieldValues, UseFormProps, FieldPath, FormState } from 'react-hook-form';
import type { SxProps, Theme } from '@mui/material/styles';

interface Field<T extends FieldValues> {
    label: React.ReactNode;
    validate?: (values: T) => Schema | undefined;
}

export type Fields<T extends FieldValues> = Record<keyof T, Field<T>>;

export type ArrayedFields<T extends FieldValues> = [FieldPath<T>, Field<T>][];

interface FieldConfig<T extends FieldValues, N extends FieldPath<T> = FieldPath<T>> {
    name: N;
    label: React.ReactNode;
}

export type FieldsConfig<T extends FieldValues> = Record<FieldPath<T>, FieldConfig<T>>;

export interface BaseFieldProps<
    T extends FieldValues,
    N extends FieldPath<T> = FieldPath<T>,
> {
    sx?: SxProps<Theme>;
    field: FieldConfig<T, N>;
}

export interface FormProps<T extends FieldValues> {
    sx?: SxProps<Theme>;
    fields: FieldsConfig<T>;
    onSubmit: (data: T) => void;
    defaultValues?: UseFormProps<T>['defaultValues'];
}

export { FieldValues, FormState };
