
import { Schema } from "mongoose";

const ProductsCollection = "Products"

const ProductShema = new Schema({
    title: {type:String, required:true, max:100 },
    description: {type:String, required:true, max:180 },
    code: {type:String, required:true, max:10 },
    thumbnail: {type:String, required:true, max:100 },
    price: {type:Number, required:true },
    stock: {type:String, required:true, default:1},
    timestamp: {type:String, required:true, max:50 },
})

ProductShema.set("toJSON",{
    transform:(_,response)=>{
        response.id = response._id;
        delete response._id;
        return response;
    }
});

export const ProductModel = {ProductShema,ProductsCollection}

