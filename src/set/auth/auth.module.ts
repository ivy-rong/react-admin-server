import { Module } from '@nestjs/common'

// import { PrismaService } from 'src/auth/prisma.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
