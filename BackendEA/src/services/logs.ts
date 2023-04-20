//In charge to connect with the dB
import { Asignacion } from "../interfaces/asignacion.interface";
import { Logs } from "../interfaces/logs.interface";
import { Producto } from "../interfaces/producto.interface";
import AsignacionModel from "../models/asignacion";
import ProductoModel from "../models/producto";
import LogsModel from "../models/logs";
import { Types } from "mongoose";


const createLog = async(item: Logs) => {
    const responseInsert = await LogsModel.create(item);
    return responseInsert;
};

const getLogs = async() => {
    const responseItem = await LogsModel.find({});
    return responseItem;
};

const getLog = async(id: string) => {
    const responseItem = await LogsModel.findOne({_id: id});
    return responseItem;
};


const deleteLog = async(id: string) => {
    const responseItem = await LogsModel.findOneAndRemove({_id: id});
    return responseItem;
}

const updateLog = async(id: string, data: Logs) => {
    const responseItem = await LogsModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};



export {createLog, getLogs, getLog, deleteLog, updateLog};
