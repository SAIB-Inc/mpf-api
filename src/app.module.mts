import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller.mjs';
import { AppService } from './services/app.service.mjs';
import { MpfController } from './controllers/mpf.controller.mjs';
import { MpfService } from './services/mpf.service.mjs';

@Module({
  imports: [],
  controllers: [AppController, MpfController],
  providers: [AppService, MpfService],
})
export class AppModule {}
