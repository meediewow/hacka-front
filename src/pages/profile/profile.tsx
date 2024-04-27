import React from 'react';
import Stack from '@mui/material/Stack';
import { useUser } from '@/features/auth';
import { UserProfile } from '@/features/user/user-profile';

export const ProfilePage: React.FC = () => {
    const user = useUser();

    if (!user) {
        return null;
    }

    return (
        <Stack width="100%" p={2} justifyContent="center">
            <UserProfile user={user} />
        </Stack>
    );
};
