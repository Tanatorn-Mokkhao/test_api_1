import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from "@nestjs/mongoose";
import { productSchema } from "./schema/product.schema";
import { ProductMiddleware } from './middleware/product.middleware';
@Module({
  imports: [MongooseModule.forFeature([{name: 'Product', schema: productSchema}])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProductMiddleware).forRoutes({path:'product/create',method:RequestMethod.POST});
  }
}
