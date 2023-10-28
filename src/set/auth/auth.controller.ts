import { Body, Controller, Post } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiNotImplementedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger'

import { AuthService } from './auth.service'
import { LoginDto, SignupDto } from './dto'

@ApiTags('认证')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ description: '注册' })
  @ApiOkResponse({ description: '注册成功' })
  @ApiBody({ description: '注册信息', type: SignupDto })
  @Post('signup')
  signup(@Body() SignupData: SignupDto) {
    return this.authService.signup(SignupData)
  }

  @ApiOperation({ description: '登录' })
  @ApiOkResponse({ description: '登录成功' })
  @ApiBadRequestResponse({ description: '用户名或密码不正确' })
  @ApiUnauthorizedResponse({ description: '认证失败' })
  @ApiNotImplementedResponse({ description: '不支持该登录方式' })
  @ApiBody({ description: '登录信息', type: LoginDto })
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }
}
