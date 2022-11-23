import { Router } from "express";
import { Productos, productoMongo } from "../src/Dao/index.js";
import { verifyRole } from "../src/Verificador/Validador.js";
// import { ApiProductos } from "../src/ProductosApi.js"; 


const routerProductos = Router();

routerProductos.get("/",async (req,res) =>{
    // const productos = await Productos.getAll();
    const Productos = await productoMongo.getAll()
    res.send(Productos) 
} );

routerProductos.get('/:id', async(req, res) => {
    const{id}=req.params
    const productId =  await productoMongo.getById(id)
    if (productId) {
        res.json(productId)      
    } else {
        res.json({"error":"Producto no encontrado"});
    }
})

routerProductos.post("/",verifyRole ,async (req, res) => {
    const {title,price,thumbnail, code, description,stock } =req.body
    if (title&&price&&thumbnail&&code&&description&&stock) {
        // const producto = await Productos.save({title,price,thumbnail,stock,code,description , timestamp : new Date().toLocaleDateString()}) 
        const producto = await productoMongo.save({title,price,thumbnail,stock,code,description , timestamp : new Date().toLocaleDateString()}) 
        res.send({ id:producto, "mensaje" : "se agrego el producto   " })
    } else {
        res.json({"mensaje" : "producto mal ingresado " })
    }
})


routerProductos.put('/:id',verifyRole, async (req, res) => {
    const{id}=req.params
    const {title,price,thumbnail, code, description,stock } =req.body
    if (title&&price&&thumbnail&&code&&description&&stock) {
        // const producto = await Productos.updateById( id, {title,price,thumbnail,code, description,stock}) 
        const producto = await productoMongo.updateById( id, {title,price,thumbnail,code, description,stock}) 
        res.send({ id:producto, mensaje :`" Se cambió el producto  con id ${id}` })
    } else {
        res.json({"mensaje" : "producto mal ingresado " })
    }
})

routerProductos.delete("/:id",verifyRole, async(req,res)=> {
    const{id}=req.params
    // const producto = await Productos.deleteById(id)
    const producto = await productoMongo.deleteById(id)
    if (!producto) {
        res.send({id:producto, mensaje :`"Producto eliminado con id ${id}`});
    } else {
        res.json({"error":"Producto no encontrado"});
    }
})


export {routerProductos};