import { Body, Controller, HttpStatus, Post, Res ,Get, NotFoundException, UsePipes, ValidationPipe} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {
        
    }
    @Post('/create')
    @UsePipes(new ValidationPipe({ transform: true }))
    async createPost(@Res() res,@Body() createProductDTO:CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
        message: 'Product Successfully Created',
        product});
    }
    @Get('getAll/product')
    async getProducts(@Res() res) {
        const product = await this.productService.getAllProduct();
        if (!product) throw new NotFoundException('PRoduct does not found');
        return res.status(HttpStatus.OK).json({ data: product });
    }

    @Get('GetAll')
    async getProductandCategory(@Res() res) {
        const product = await this.productService.getAll();
        if (!product) throw new NotFoundException('Product not found');
        return res.status(HttpStatus.OK).json({ data: product });
    }
}
