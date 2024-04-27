import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterLuxon } from '@mui/x-date-pickers-pro/AdapterLuxon';

export const withDatePickers = (Component: React.FC<React.PropsWithChildren>) => {
    const WithDatePickers: React.FC<React.PropsWithChildren> = (props) => {
        return (
            <LocalizationProvider dateAdapter={AdapterLuxon}>
                <Component {...props} />
            </LocalizationProvider>
        );
    };
    return WithDatePickers;
};
