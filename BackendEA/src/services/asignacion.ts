//In charge to connect with the dB
import { Asignacion } from "../interfaces/asignacion.interface";
import { Producto } from "../interfaces/producto.interface";
import AsignacionModel from "../models/asignacion";
import ProductoModel from "../models/producto";
import { Types } from "mongoose";


const createAsignacion = async(item: Asignacion) => {
    const responseInsert = await AsignacionModel.create(item);
    return responseInsert;
};

const updateAsignacion = async(idProducto: string, idAsignacion: string) => {
    const responseInsert = await AsignacionModel.findOneAndUpdate({_id: idAsignacion}, 
    {$addToSet: {producto: new Types.ObjectId(idProducto)}},
    {new: true}).populate('prodcutos');
    return responseInsert;
};


const deleteAsignacion = async(id: string) => {
    const responseItem = await AsignacionModel.findOneAndRemove({_id: id});
    return responseItem;
}


export {createAsignacion, deleteAsignacion, updateAsignacion};
