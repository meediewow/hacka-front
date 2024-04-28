import type { Sitter } from '@/entities/sitter/types';
import { UserApiModel } from '@/entities/user/types';

export const dataToViewModel = (data: UserApiModel): Sitter => {
    return {
        _id: data._id,
        photo: data.profile?.photo ?? '',
        name: data.profile?.name ?? '',
        address: data.profile?.address?.city ?? '',
        rating: data.rate ?? 0,
        countOrders: data.profile?.ordersCount ?? 0,
        price: Math.floor(Math.random() * 100) + 1,
    };
};
