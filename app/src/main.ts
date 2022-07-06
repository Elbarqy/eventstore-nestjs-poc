import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect as connectToEventStore } from './eventstore.db';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await connectToEventStore();
  await app.listen(3000);
}
bootstrap();
