
import { Schema } from "mongoose";
import { ProductModel } from "./ProductModel.js";


const CartCollection = "Carts"

const CartShema = new Schema(
    {
    productos: [ ProductModel.ProductShema],    
    productsRef:[{type:Schema.Types.ObjectId, ref: "Products"}],
    timestamp: {type:String, required:true, max:50 },
},
{
    timestamps:true,
    virtuals:true
})

CartShema.set("toJSON",{
    transform:(_,response)=>{
        response.id = response._id;
        delete response._id;
        return response;
    }
});

export const CartModel = {CartShema, CartCollection}