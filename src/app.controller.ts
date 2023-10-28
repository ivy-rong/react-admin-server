// app.controller.ts
import { Controller, Get } from '@nestjs/common'

import { AppService } from './app.service'
// import { AuthService } from './auth/auth.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Inject(AuthService)
  // private authService: AuthService

  @Get('create')
  getHello(): string {
    return this.appService.getHello()
  }
}
