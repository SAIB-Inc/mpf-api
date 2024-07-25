import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller.mjs';
import { AppService } from './services/app.service.mjs';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}