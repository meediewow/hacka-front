import React from 'react';
import { useUser } from '../context/use-user';
import { AuthLevel } from '@/entities/user/types';

type Props = {
    children: React.ReactNode;
    authLevel?: AuthLevel;
};

export const AuthGuard: React.FC<Props> = ({ children, authLevel }) => {
    const user = useUser();

    if (!user) {
        return <b>Зарегайся или войди</b>;
    }

    if (authLevel && !user.isSitter) {
        window.location.href = '/';

        return null;
    }

    return <>{children}</>;
};
