import { Document, ObjectId } from "mongoose";

export interface Product extends Document {
    readonly name: string;
    readonly category: ObjectId;
}