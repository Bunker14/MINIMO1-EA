import { ObjectId } from "mongoose";

export interface Asignacion {
    usuario: ObjectId[];
    producto: ObjectId[];
    ticket: ObjectId[];
}