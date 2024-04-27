import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { getSchema } from './get-schema';
import type { Resolver } from 'react-hook-form';
import type { FieldValues, FieldsConfig } from '../types';

export const useResolver = <T extends FieldValues>(fields: FieldsConfig<T>) => {
    return React.useMemo(
        (): Resolver<T> => (values, context, options) => {
            const schema = getSchema(values, fields);

            return zodResolver(schema.passthrough())(values, context, options);
        },
        [fields]
    );
};
