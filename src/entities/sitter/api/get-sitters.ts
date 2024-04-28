import { api } from '@/shared/api';
import type { AxiosResponse } from 'axios';
import type { Sitter } from '@/entities/sitter/types';

interface SittersRequest {
    category: number[];
    period?: {
        start: string;
        end: string;
    };
    coordinates?: [number, number];
    sorter?: {
        field: string;
        order: string;
    };
}

export const getSitters = (
    data: SittersRequest
): Promise<AxiosResponse<{ list: Sitter[] }>> => {
    return api.post('/sitter/list', data);
};
