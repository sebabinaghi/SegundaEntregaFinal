import { MongoDbContainer } from "../Containers/MongoContainer.js";
import { CartModel } from "../Model Mongoose/CartModel.js";

 class CartsMongo extends MongoDbContainer{

    constructor(){
        super({
            name:CartModel.CartCollection,
            schema: CartModel.CartShema,
        })
    }

    async getById(id) {
        const response = await this.model.findById(id).populate("productsRef");
    
        return response;
      }
}
// asdasdasd
export {CartsMongo}