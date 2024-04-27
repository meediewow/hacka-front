import { Pet } from '../pet/types';
import { Tariff } from '../tariff/types';

export interface User {
    name: string;
    phone?: string;
    address?: string;

    photo?: string;
    pets?: Pet[];
    tariff?: Tariff[];
}
