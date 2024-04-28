import { User, UserApiModel } from '../types';

export const mapUserApiModelToUser = (user: UserApiModel): User => {
    return {
        name: user.profile?.name ?? '',
        phone: user.profile?.communication?.phone,
        address: user.profile?.address?.city,
        photo: user.profile?.photo,
        pets: user.pets?.map((p) => ({
            name: p.name,
            age: p.age,
            comment: p.comment,
            category: p.type,
        })),
        tariff: user.profile?.tariff?.map((t) => ({
            category: t.category,
            pricePerDay: t.pricePerDay,
        })),

        isSitter: user.roles?.includes(2),

        countOrders: user.profile?.ordersCount ?? 0,
        rating: user.rate ?? 0,
    };
};
