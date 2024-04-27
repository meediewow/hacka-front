import type { Components, Theme } from '@mui/material/styles';

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
    styleOverrides: (theme) => ({
        html: {
            height: '100%',
        },
        body: {
            height: '100%',
            backgroundColor: theme.palette.grey[100],
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        },
        '#root': {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'auto',
        },
        '.MuiDateRangeCalendar-root > div[style]': {
            display: 'none !important',
        },
    }),
};
