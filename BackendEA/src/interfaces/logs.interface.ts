import { ObjectId } from "mongoose";

export interface Logs {
    user: ObjectId[];
    fechaLog: string;
    tipoLog: string;
}