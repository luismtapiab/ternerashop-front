import { Product } from "./product.model";

export interface Group {
    id: number;
    product: Product;
    isActive: boolean;
    purchaseGoal: number;
    participants: number;
    createdAt: string;
    endsAt: string;
}