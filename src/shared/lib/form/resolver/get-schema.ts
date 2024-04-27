import { z } from 'zod';
import type { FieldValues, FieldsConfig, ArrayedFields } from '../types';

export const getSchema = <T extends FieldValues>(values: T, fields: FieldsConfig<T>) => {
    const schema: z.ZodRawShape = {};

    for (const [name, field] of Object.entries(fields) as ArrayedFields<T>) {
        if (field.validate) {
            const validateSchema = field.validate(values);

            if (validateSchema) {
                schema[name] = validateSchema;
            }
        }
    }

    return z.object(schema);
};
