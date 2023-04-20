import { Request,Response } from "express";
import { insertUser,getUsers,getUser,updateUser,deleteUser} from "../services/user";
import { handleHttp } from "../utils/error.handle";
import { deleteGrupo, getGrupo, getGrupos, insertGrupo, joinGrupo, updateGrupo } from "../services/grupo";
import { createAsignacion, deleteAsignacion, updateAsignacion } from "../services/asignacion";
import { getProducto } from "../services/producto";
import { getTicket } from "../services/ticket";
import { createLog, deleteLog, getLog, getLogs, updateLog } from "../services/logs";

const create_Log=async({body}:Request,res:Response)=>{
    try{
        const response=await createLog(body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_CREATE_LOG");
    }
};

const get_Log=async({params}:Request,res:Response)=>{
    try{
        const {idLog}=params;
        const response=await getLog(idLog);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_LOG");
    }
};

const get_Logs=async(req:Request,res:Response)=>{
    try{
        const response=await getLogs();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_LOGS");
    }
};

const delete_Log=async ({params}:Request,res:Response)=>{
    try{
        const {idLog}=params;
        const response=await deleteLog(idLog);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_LOG");
    }
};


const update_Log=async ({params,body}:Request,res:Response)=>{
    try{
        const {idLog}=params;
        const response=await updateLog(idLog, body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_LOG");
    }
};



export{create_Log, delete_Log, update_Log, get_Log, get_Logs};