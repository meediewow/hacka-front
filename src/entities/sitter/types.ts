export interface SittersVariables {
    category: number[];
    period?: {
        start: string;
        end: string;
    };
    coordinates?: [number, number];
    sorter?: {
        field: string;
        order: string;
    };
}

export interface Sitter {
    _id: string;
    photo: string;
    name: string;
    address: string;
    rating: number;
    countOrders: number;
    price?: number;
}
