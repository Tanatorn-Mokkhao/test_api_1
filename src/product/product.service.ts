import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Product } from './interface/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {
        
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const newProduct = new this.productModel(createProductDTO);
        return newProduct.save();
    }
    async getAllProduct(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }
    async getAll(): Promise<Product[]> {
        const products = await this.productModel.find().populate({ path: 'category', select: 'nameType' });
        return products;
    }
}
