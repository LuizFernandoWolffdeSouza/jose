import express from "express"
import mongo from "./config/dbconfig.js"
const app = express()
const porta = 2000
import rota from"../src/routers/mentalrouter.js" 

app.use(express.json())

app.use("/saudemental", rota )
mongo()

app.listen(porta, ()=> {
    console.log(`Servidor rodando na porta ${porta}`)
})


