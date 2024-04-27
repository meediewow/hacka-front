import React from 'react';
import type { FieldValues, Fields, ArrayedFields, FieldsConfig } from './types';

export const useFields = <T extends FieldValues>(getFields: () => Fields<T>) => {
    return React.useMemo(() => {
        const fields = getFields();
        const arrayedFields = Object.entries(fields) as ArrayedFields<T>;
        const finishedFields = {} as FieldsConfig<T>;

        for (const [name, field] of arrayedFields) {
            finishedFields[name] = { name, ...field };
        }

        return { fields: finishedFields };
    }, [getFields]);
};
