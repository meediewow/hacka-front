import { getLsKey } from '@/shared/utils/get-ls-key';

const TokenKey = 'token';

export const getUserToken = () => {
    return getLsKey(TokenKey);
};

export const clearUserToken = () => {
    window.localStorage.removeItem(TokenKey);
};

export const setUserToken = (token: string) => {
    window.localStorage.setItem(TokenKey, token);
};
