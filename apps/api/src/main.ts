/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify'
import fastifyCookie from '@fastify/cookie'
import { ValidationError } from 'class-validator'
import helmet from '@fastify/helmet'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      skipMissingProperties: true,
      forbidUnknownValues: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const errorrsMessages = errors.map((error) => Object.values(error.constraints))
        return new BadRequestException(errorrsMessages)
      }
    })
  )
  app.useLogger(['log', 'error', 'warn', 'debug', 'verbose'])

  await app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`, 'unpkg.com'],
        styleSrc: [
          `'self'`,
          `'unsafe-inline'`,
          'cdn.jsdelivr.net',
          'fonts.googleapis.com',
          'unpkg.com'
        ],
        fontSrc: [`'self'`, 'fonts.gstatic.com', 'data:'],
        imgSrc: [`'self'`, 'data:', 'cdn.jsdelivr.net'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`, `cdn.jsdelivr.net`, `'unsafe-eval'`]
      }
    }
  })

  app.register(fastifyCookie, { secret: process.env.COOKIE_SECRET })
  app.enableCors({
    origin: true,
    credentials: true
  })

  const globalPrefix = 'graphiql'
  app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 3000
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()
