import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './interface/category.interface';
import { CreateCategoryDTO } from './dto/category.dto';
@Injectable()
export class CategoryService {
    constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>) {
    }

    async createCategory(createCategoryDTO: CreateCategoryDTO): Promise<Category> {
        const newCategory = new this.categoryModel(createCategoryDTO);
        return newCategory.save();
    }

}
