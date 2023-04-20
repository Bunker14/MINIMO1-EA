import {  Schema, Types, model, Model } from "mongoose";
import { Grupo } from "../interfaces/grupo.interface";

const SubjectSchema = new Schema<Grupo>(
    {
        name:{
            type: String,
            required:true,
        },
        password:{
            type: String,
            required: true,
        },
        users:{
            type: [Schema.Types.ObjectId],
            ref:'users',
        },
        tickets:{
            type: [Schema.Types.ObjectId],
            ref:'tickets',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const GrupoModel = model('grupos', SubjectSchema);

export default GrupoModel;