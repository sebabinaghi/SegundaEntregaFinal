import { MongoDbContainer } from "../Containers/MongoContainer.js";
import { ProductModel } from "../Model Mongoose/ProductModel.js";

 class ProductsMongo extends MongoDbContainer{
    constructor(){
        super({
            name:ProductModel.ProductsCollection,
            schema: ProductModel.ProductShema,
        })
    }
}

export {ProductsMongo}