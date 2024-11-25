import { Router }  from "express"
import {  
    store,
    index,
    update,
    usuarioid,
    destroy

 } from "../controllers/saudecontroller.js";
 const router = Router()

 router.get("/", index)
 router.get("/:id", usuarioid )
 router.post("/", store)
 router.put("/:id", update)
 router.delete("/:id", destroy)

 export default router
