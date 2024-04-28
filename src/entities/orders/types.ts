import { PetAM } from '../pet/types';
import { UserApiModel } from '../user/types';

export type OrderAM = {
    _id: string;
    client?: UserApiModel;
    sitter?: UserApiModel;
    startAt?: string;
    finishAt?: string;
    pets?: PetAM[];
    status?: number;
    isPayed?: boolean;
    price?: number;
    createdAt?: string;
};

export interface CreateOrderData {
    _id: string;
}

export interface CreateOrderVariables {
    sitterId?: string;
    period?: {
        start: string;
        end: string;
    };
    petIds: string[];
}
