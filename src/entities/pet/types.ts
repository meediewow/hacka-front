import { PetType } from './enum';

export type Pet = {
    name?: string;
    category: PetType;
    age?: number;
    comment?: string;
};
