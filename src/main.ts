import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useStaticAssets('public', { prefix: '/static' })
  app.useStaticAssets('uploads', { prefix: '/uploads' })

  await app.listen(3000)
}
bootstrap().catch(() => {})
