import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  @Get()
  getHhello() {
    return 'hello world';
  }
}
