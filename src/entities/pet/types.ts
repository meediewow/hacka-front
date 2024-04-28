import { PetType } from './enum';

export type PetAM = {
    _id: string;
    name?: string;
    type: PetType;
    age?: number;
    comment?: string;
};

export type Pet = {
    name?: string;
    category: PetType;
    age?: number;
    comment?: string;
};
