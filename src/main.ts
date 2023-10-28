// 应用程序的入口文件将使用核心函数 NestFactory 来创建一个 Nest 应用程序实例
import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useStaticAssets('public', { prefix: '/static' })
  app.useStaticAssets('uploads', { prefix: '/uploads' })

  // swagger配置
  const config = new DocumentBuilder()
    .setTitle('REACT_ADMIN_API')
    .addBearerAuth({
      type: 'http',
      description: '基于JMT认证',
      name: 'bearer'
    })
    .build()

  const document = SwaggerModule.createDocument(app, config, {})

  SwaggerModule.setup('api/docs', app, document)

  await app.listen(3000)
}
bootstrap().catch(() => {})
