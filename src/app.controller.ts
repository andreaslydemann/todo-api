import { Controller, Get } from '@nestjs/common';

@Controller('heartbeat')
export class AppController {
  @Get()
  root(): string {
    return 'Hello World!';
  }
}
