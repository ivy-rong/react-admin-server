import { Inject, Injectable } from '@nestjs/common'
import type { Prisma } from '@prisma/client'

import { PrismaService } from '../prisma.service'
import type { LoginDto } from './dto'

@Injectable()
export class AuthService {
  @Inject(PrismaService)
  private prisma: PrismaService

  signup(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data
    })
  }

  login(loginDto: LoginDto) {
    return this.prisma.user.findUnique({
      where: {
        ...loginDto
      }
    })
  }
}
