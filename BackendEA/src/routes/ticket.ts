/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import {get_Grupos, get_Grupo, update_Grupo, delete_Grupo, join_Grupo, create_Grupo} from "../controllers/grupo";
import { get_productos_ticket,get_Ticket,create_Ticket, delete_Ticket, get_Tickets, get_TicketsPaginado, insert_ProductoToTicket, update_Ticket } from "../controllers/ticket";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", get_Tickets);
router.get("/allPaginado/:pagina1", get_TicketsPaginado);
router.get("/:idTicket", get_Ticket);
router.post("/", create_Ticket);
router.delete("/:idTicket",delete_Ticket);
router.put("/:idTicket",update_Ticket);
router.post("/insert", insert_ProductoToTicket)
router.get("/:idTicket/productos",get_productos_ticket)



export {router};
