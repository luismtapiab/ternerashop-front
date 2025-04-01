import { Product } from "./product.model";

export interface Group {
    id: number;
    product: Product;
    isActive: boolean;
    createdAt: string;
    endsAt: string;
}