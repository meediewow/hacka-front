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
