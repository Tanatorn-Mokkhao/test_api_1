import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from "helmet";
const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: "http://localhost:8080", credentials: true });
  app.use(helmet());
  
  await app.listen(PORT);
}
bootstrap();
