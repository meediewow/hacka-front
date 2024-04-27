import React from 'react';
import { AuthProvider } from '@/features/auth/context/auth-context';

export const withAuth = (Component: React.FC<React.PropsWithChildren>) => {
    const WithAuth: React.FC<React.PropsWithChildren> = (props) => {
        return (
            <AuthProvider>
                <Component {...props} />
            </AuthProvider>
        );
    };
    return WithAuth;
};
