import { IsNotEmpty, isNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';
 
export class CreateProductDTO {
    @IsNotEmpty()
    readonly name: String;


    @IsNotEmpty()
    readonly category: ObjectId;
 }
