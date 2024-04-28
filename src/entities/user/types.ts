import { Pet } from '../pet/types';
import { Tariff } from '../tariff/types';

export interface User {
    name: string;
    phone?: string;
    address?: string;

    photo?: string;
    pets?: Pet[];
    tariff?: Tariff[];

    isSitter?: boolean;

    rating?: number;
    countOrders?: number;

    about?: string;
}

export type UserApiModel = {
    _id: string;
    rate?: number;
    about?: string;
    roles?: number[]; // 1 - client, 2 - sitter
    pets?: {
        name: string;
        age: number;
        comment: string;
        _id: string;
        type: number;
        userId: string;
        createdAt: string;
    }[];
    profile?: {
        name: string;
        photo: string;
        address?: {
            country: string;
            city: string;
        };
        ordersCount: number;
        communication?: {
            phone: string;
        };
        tariff?: {
            category: number;
            pricePerDay: number;
        }[];
    };
};

export type AuthLevel = 'client' | 'sitter';

export interface UserReview {
    targetId: string;
    name: string;
    photo: string;
    text: string;
    date: string;
    rate: number;
}

export interface UserReviewsVariables {
    targetId?: string;
}
