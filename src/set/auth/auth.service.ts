import { Inject, Injectable } from '@nestjs/common'
import type { Prisma } from '@prisma/client'

import type { LoginDto } from './dto'
import { PrismaService } from './prisma.service'

@Injectable()
export class AuthService {
  @Inject(PrismaService)
  private prismaService: PrismaService

  signup(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({
      data
    })
  }

  login(loginDto: LoginDto) {
    return this.prismaService.user.findUnique({
      where: {
        ...loginDto
      }
    })
  }
}
