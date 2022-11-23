import mongoose from "mongoose";
// require("dotenv").config()
import * as dotenv from "dotenv"
dotenv.config({path:"../.env"})


const init = async()=>{
    try {
        // mongoose.connect("mongodb+srv://Train:Patagonia2023@cluster0.ilcaprq.mongodb.net/", {dbName:"Ecommerce"})
        mongoose.connect(process.env.MONGO_DB_URL, {dbName:"Ecommerce"})
        console.log("Connection established")
    } catch (error) {
        console.log(error)
    }
}

export const MongoDbService = {init}
