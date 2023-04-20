import { ObjectExpression, ObjectId } from "mongoose";

export interface Producto {
    name: string;
    quantity: number;
    price: number;
    totalprice?: number;
}