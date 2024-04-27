import { api } from '@/shared/api';
import type { AxiosResponse } from 'axios';
import type { Sitter } from '@/entities/sitter/types';

export const getSitters = (): Promise<AxiosResponse<{ list: Sitter[] }>> => {
    return api.post('/sitter/list');
};
