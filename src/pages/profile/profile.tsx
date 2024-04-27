import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useUser } from '@/features/auth';

export const ProfilePage: React.FC = () => {
    const user = useUser();

    return (
        <Stack width="100%" p={2} justifyContent="center">
            <Typography variant="h5" mb={1.5}>
                {user?.name}
            </Typography>
        </Stack>
    );
};
