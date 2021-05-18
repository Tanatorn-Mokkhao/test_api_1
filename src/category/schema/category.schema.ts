import { Schema } from "mongoose";

export const categorySchema = new Schema({
    nameType: {type:String},
    price: { type: Number },
    quantity: {type:Number}
})