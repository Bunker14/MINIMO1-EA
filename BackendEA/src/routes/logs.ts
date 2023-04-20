/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { create_Log, delete_Log, get_Log, get_Logs, update_Log } from "../controllers/logs";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", get_Logs);
router.get("/:idLog", get_Log)
router.post("/", create_Log);
router.put("/:idLog",update_Log);
router.delete("/:idLog",delete_Log);

export {router};
