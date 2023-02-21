import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodoModule } from './features/todo/todo.module';

@Module({
  controllers: [AppController],
  imports: [TodoModule],
  providers: [],
})
export class AppModule {}
