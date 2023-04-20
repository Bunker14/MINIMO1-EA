//In charge to connect with the dB
import { Grupo } from "../interfaces/grupo.interface";
import { Types } from "mongoose";
import { User } from "../interfaces/user.interface";
import GrupoModel from "../models/grupo";
import UserModel from "../models/user";

const insertGrupo = async(item: Grupo) => {
    const responseInsert = await GrupoModel.create(item);
    return responseInsert;
};

const getGrupos = async() => {
    const responseItem = await GrupoModel.find({});
    return responseItem;
};

const getGrupo = async(id: string) => {
    const responseItem = await GrupoModel.findOne({_id: id});
    return responseItem;
};

const updateGrupo = async(id: string, data: Grupo) => {
    const responseItem = await GrupoModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteGrupo = async(id: string) => {
    const responseItem = await GrupoModel.findOneAndRemove({_id: id});
    return responseItem;
}

const joinGrupo = async(UserName: string, password: string, GrupoName: string ) => {
    const GrupoSeleccionado = await GrupoModel.findOne({_id:GrupoName});
    const PasswordGrupo = GrupoSeleccionado?.password;
    if ( PasswordGrupo === password) {
    const responseItem = await GrupoModel.findOneAndUpdate({_id:GrupoName},
        {$addToSet: {users: new Types.ObjectId(UserName)}},
        {new: true}).populate('users');

        console.log(responseItem?.users);
        return responseItem;
    } 
    else{
        console.log('Error: contraseña incorrecta')

    } 

}
const insertTicketGrupo = async(idGrupo:string,idTicket:string) => {
    console.log(idGrupo);
    console.log(idTicket);
    const quebuscas = await GrupoModel.findOne({_id:idGrupo})
    const responseItem = await GrupoModel.findOneAndUpdate(
        {_id:idGrupo},
        {$addToSet: {tickets: new Types.ObjectId(idTicket)}},
        {new: true}
    )
    console.log(quebuscas);
    console.log(responseItem);
    return responseItem;
    
}
    



export {insertGrupo, getGrupos, getGrupo, updateGrupo, deleteGrupo, joinGrupo, insertTicketGrupo};
