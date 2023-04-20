import {  Schema, Types, model, Model } from "mongoose";
import { Asignacion } from "../interfaces/asignacion.interface";

const SubjectSchema = new Schema<Asignacion>(
    {
        usuario:{
            type: [Schema.Types.ObjectId],
            ref:'users',
        },
        producto:{
            type: [Schema.Types.ObjectId],
            ref:'productos',
        },
        ticket:{
            type: [Schema.Types.ObjectId],
            ref:'tickets',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const AsignacionModel = model('Asignaciones', SubjectSchema);

export default AsignacionModel;