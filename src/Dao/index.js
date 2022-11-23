import { ContainerFilesystem } from "../Containers/FilesystemContainer.js"
import {ProductsMongo} from "./ProductosMongo.js"
import{CartsMongo} from "./CartMongodb.js"


const Productos = new ContainerFilesystem("products") 
const carrito = new ContainerFilesystem("carrito")

const carritoMongo = new CartsMongo()
const productoMongo = new ProductsMongo()

export {Productos,carrito, carritoMongo, productoMongo }; 
