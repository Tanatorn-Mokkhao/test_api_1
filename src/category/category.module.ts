import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { categorySchema } from './schema/category.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Category', schema: categorySchema }])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
