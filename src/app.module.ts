// 应用程序的根模块
import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { FileModule } from './file/file.module';

@Module({
  imports: [AuthModule, FileModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
