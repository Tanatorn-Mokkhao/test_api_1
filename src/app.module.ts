import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from "@nestjs/mongoose";
import { CategoryModule } from './category/category.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:mart12299@cluster0.hifyh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  , { useNewUrlParser: true, useUnifiedTopology: true }),ProductModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
