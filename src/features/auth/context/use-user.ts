import { useContext } from 'react';
import { AuthContext } from './auth-context';

export const useUser = () => {
    const { user } = useContext(AuthContext);

    return user;
};
