import { IsNotEmpty, MinLength } from 'class-validator';


export class CreateCategoryDTO {
    @IsNotEmpty()
    @MinLength(3)
    readonly nameType: String
    
    @IsNotEmpty()
    readonly price: String
    
    @IsNotEmpty()
    readonly quantity: String

}