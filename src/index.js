import express  from "express";
import { routerProductos,routerCart } from "../Routes/index.js";
import { MongoDbService } from "./service/index.js";
import * as dotenv from "dotenv"
dotenv.config()


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

MongoDbService.init()
app.listen(PORT, ()=>  console.log (`Escuchando en puerto ${PORT}`))


app.use("/api/productos", routerProductos)
app.use("/api/carrito",routerCart)





