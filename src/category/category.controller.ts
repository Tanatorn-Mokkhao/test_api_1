import { Body, Controller, Post, Res,HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCategoryDTO } from './dto/category.dto';
import {CategoryService } from './category.service';


@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {
    }

    @Post('/create')
     @UsePipes(new ValidationPipe({transform:true}))
    async createPost(@Res() res, @Body() createCategoryDTO: CreateCategoryDTO) {
        const category = await this.categoryService.createCategory(createCategoryDTO);
        return res.status(HttpStatus.OK).json({ message: 'Create Category Successfully', data: category });
    }

}
