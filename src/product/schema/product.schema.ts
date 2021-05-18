import { Schema } from "mongoose";

export const productSchema = new Schema({
    name: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    creatAt: {type:Date,default:Date.now}
});