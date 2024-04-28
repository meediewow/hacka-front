import { api } from '@/shared/api';
import type { AxiosResponse } from 'axios';
import type { Sitter, SittersVariables } from '@/entities/sitter/types';

export const getSitters = (
    data: SittersVariables
): Promise<AxiosResponse<{ list: Sitter[] }>> => {
    return api.post('/sitter/list', data);
};
