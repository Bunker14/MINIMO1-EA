import { ObjectId } from "mongoose";

export interface Grupo {
    name: string;
    password: string;
    users?: ObjectId[];
    tickets?: ObjectId[];
}