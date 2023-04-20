import {  Schema, Types, model, Model } from "mongoose";
import { Logs } from "../interfaces/logs.interface";

const LogsSchema = new Schema<Logs>(
    {
        user:{
            type: [Schema.Types.ObjectId],
            ref:'users',
        },
        fechaLog:{
            type: String,
        },
        tipoLog:{
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const LogsModel = model('Logs', LogsSchema);

export default LogsModel;