import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service.mjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
