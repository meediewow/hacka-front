import { api } from '@/shared/api';
import type { SittersVariables } from '@/entities/sitter/types';

export const getSitters = async (
    data: SittersVariables
): Promise<{ list: UserApiModel[] }> => {
    return (await api.post('/sitter/list', data)).data;
};
