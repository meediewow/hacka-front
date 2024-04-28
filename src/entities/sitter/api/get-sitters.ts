import { api } from '@/shared/api';
import type { Sitter, SittersVariables } from '@/entities/sitter/types';

export const getSitters = async (data: SittersVariables): Promise<{ list: Sitter[] }> => {
    return (await api.post('/sitter/list', data)).data;
};
