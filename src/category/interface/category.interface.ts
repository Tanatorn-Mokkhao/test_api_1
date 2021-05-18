import { Document } from 'mongoose';

export interface Category extends Document {
    readonly nameType: string,
    readonly price: number,
    readonly quantity:number,
}