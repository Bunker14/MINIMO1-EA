/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { ticketsOfUser,gruposOfUser,deletePerson, getPerson, getPeople, postPerson, updatePerson, getPeoplePaginado, disablePerson } from "../controllers/user";
import { getUsersPaginado } from "../services/user";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", getPeople);
router.get("/allPaginado/:pagina1", getPeoplePaginado);
router.get("/:idUser", getPerson);
router.post("/",postPerson);
router.put("/:idUser",updatePerson);
router.put("/disable/:idUser",disablePerson);
router.delete("/:idUser",deletePerson);
router.get("/:idUser/grupos", gruposOfUser);
router.get("/:idUser/tickets", ticketsOfUser);


export {router};
