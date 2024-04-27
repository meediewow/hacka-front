import { User, UserApiModel } from '../types';

export const mapUserApiModelToUser = (user: UserApiModel): User => {
    return {
        name: user.profile?.name,
        phone: user.profile?.communication?.phone,
        address: user.profile?.address?.city,
        photo: user.profile?.photo,
        pets: [],
        tariff: user.profile?.tariff?.map((t) => ({
            category: t.category,
            pricePerDay: t.pricePerDay,
        })),
        isSitter: user.roles?.includes(2),
    };
};
