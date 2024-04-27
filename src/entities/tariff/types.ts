import { PetType } from '../pet/enum';

export type Tariff = {
    category: PetType;
    pricePerDay: number;
};
