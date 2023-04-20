//In charge to connect with the dB
import { Grupo } from "../interfaces/grupo.interface";
import { Types } from "mongoose";
import { User } from "../interfaces/user.interface";
import GrupoModel from "../models/grupo";
import UserModel from "../models/user";
import ProductoModel from "../models/producto";
import { Producto } from "../interfaces/producto.interface";

const insertProducto = async(item: Producto) => {
    const responseInsert = await ProductoModel.create(item);
    return responseInsert;
};

const getProdcutos = async() => {
    const responseItem = await ProductoModel.find({});
    return responseItem;
};

const getProducto = async(id: string) => {
    const responseItem = await ProductoModel.findOne({_id: id});
    return responseItem;
};

const updateProducto = async(id: string, data: Grupo) => {
    const responseItem = await ProductoModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteProducto = async(id: string) => {
    const responseItem = await ProductoModel.findOneAndRemove({_id: id});
    return responseItem;
}




export {insertProducto, getProdcutos, getProducto, updateProducto, deleteProducto};
