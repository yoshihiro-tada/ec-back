// サーバー情報を隠す
import { NestExpressApplication } from '@nestjs/platform-express';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // サーバー情報を隠す
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // サーバー情報を隠す
  app.disable('x-powered-by');
  // ポート番号の変更はここでできる！
  await app.listen(8000);
}
bootstrap();
