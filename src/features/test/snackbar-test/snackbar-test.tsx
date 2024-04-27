import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { enqueueSnackbar } from 'notistack';

export const SnackbarTest: React.FC = () => {
    return (
        <Stack spacing={1}>
            <Button
                variant="contained"
                color="success"
                onClick={() => {
                    enqueueSnackbar(
                        'Response status code does not indicate success: 500 (Internal Server Error).',
                        { variant: 'success' }
                    );
                }}
            >
                <div>Show Snackbar</div>
            </Button>

            <Button
                variant="contained"
                color="error"
                onClick={() => {
                    enqueueSnackbar(
                        'Response status code does not indicate success: 500 (Internal Server Error).',
                        { variant: 'error' }
                    );
                }}
            >
                <div>Show Snackbar</div>
            </Button>

            <Button
                variant="contained"
                color="warning"
                onClick={() => {
                    enqueueSnackbar('Your notification here', {
                        variant: 'warning',
                    });
                }}
            >
                <div>Show Snackbar</div>
            </Button>

            <Button
                variant="contained"
                color="info"
                onClick={() => {
                    enqueueSnackbar('Your notification here', {
                        variant: 'info',
                    });
                }}
            >
                <div>Show Snackbar</div>
            </Button>
        </Stack>
    );
};
