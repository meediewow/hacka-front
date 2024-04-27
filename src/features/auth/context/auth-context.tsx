import { getUserToken, setUserToken } from '@/entities/user/utils/user-token';
import { User } from '@/entities/user/types';
import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetUserQuery } from '@/entities/user/api/get-user.query';

export type AuthContextType = {
    token: string | null;
    setToken: (token: string) => void;
    user: User | null;
};

export const AuthContext = React.createContext<AuthContextType>({
    token: null,
    setToken: () => {},
    user: null,
});

type Props = {
    children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const initialToken = React.useMemo(() => getUserToken(), []);

    const [token, setToken] = React.useState<string | null>(initialToken);

    console.log('token', token);

    const { data, isLoading } = useGetUserQuery(!token);

    const user = data ?? null;

    const updateToken = React.useCallback((token: string) => {
        setToken(token);
        setUserToken(token);
    }, []);

    if (isLoading) {
        return (
            <Stack height="100%" alignItems="center" justifyContent="center">
                <CircularProgress />
            </Stack>
        );
    }

    return (
        <AuthContext.Provider value={{ token, setToken: updateToken, user }}>
            {children}
        </AuthContext.Provider>
    );
};
