import { Request,Response } from "express";
import { getTicketsOfUser,insertUser,getUsers,getUser,updateUser,deleteUser, getUsersPaginado, disableUser,getGruposOfUser} from "../services/user";
import { handleHttp } from "../utils/error.handle";

const getPerson=async({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await getUser(idUser);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_USER");
    }
};

const getPeople=async(req:Request,res:Response)=>{
    try{
        const response=await getUsers();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_USERS");
    }
};

const getPeoplePaginado=async({params}:Request,res:Response)=>{
    try{
        const {pagina1}=params;
        let pagina = +pagina1
        const response=await getUsersPaginado(pagina);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_USERS");
    }
};

const updatePerson=async ({params,body}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await updateUser(idUser,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_USER");
    }
};

const postPerson=async ({body}:Request,res:Response)=>{
    try{
        const responsePerson=await insertUser(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_USER");
    }
};

const deletePerson=async ({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await deleteUser(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_USER");
    }
};

const disablePerson=async ({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await disableUser(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DISABLE_USER");
    }
};

const gruposOfUser=async({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await getGruposOfUser(idUser);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_GRUPOS_OF_USER");
    }
};

const ticketsOfUser=async({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await getTicketsOfUser(idUser);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_TICKETS_OF_USER");
    }
};

export{getPerson,getPeople,postPerson,updatePerson,deletePerson,getPeoplePaginado, disablePerson,gruposOfUser,ticketsOfUser};