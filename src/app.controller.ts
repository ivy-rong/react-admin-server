// app.controller.ts
import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common'

import { AppService } from './app.service'
// import { AuthService } from './auth/auth.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Inject(AuthService)
  // private authService: AuthService

  @Get('create')
  getHello(): string {
    throw new HttpException('xxxx', HttpStatus.BAD_REQUEST)
    return this.appService.getHello()
  }
}
