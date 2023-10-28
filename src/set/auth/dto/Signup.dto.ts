import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator'

import { LoginDto } from './login.dto'

export class SignupDto extends LoginDto {
  @ApiProperty({ description: '确认密码' })
  @MaxLength(16, { message: '确认密码长度不能大于 16 位' })
  @MinLength(4, { message: '确认密码不能小于 4 位' })
  @IsNotEmpty({ message: '确认密码不能为空' })
  readonly comfirmPassword: string
}
