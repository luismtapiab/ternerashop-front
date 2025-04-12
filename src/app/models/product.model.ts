import { Group } from "./group.model";

export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    stock?: number;
    group?: Group;
}